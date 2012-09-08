<?php

	# Function to draw a multi-segment line from an array of points.
	function multi_line ($image, $points, $colour) {

		for ($i = 0; $i <= sizeof($points)-4; $i += 2) {
			ImageLine($image, $points[$i], $points[$i+1], $points[$i+2], $points[$i+3], $colour);
		}

	}

	# Set the content type, and initialise the parameters.
	Header("Content-Type: image/gif");

	if (!isset($size) || $size <= "") { $size = 300; }
	if (!isset($x) || $x == "") { $x = "value"; }
	if (!isset($y) || $y == "") { $y = "poshness"; }

	# Set up dimensions.
	$font_size = $size/120;
	$font_height = ImageFontHeight($font_size);
	$margin = $font_height/2;
	$center_x = $size / 2;
	$center_y = $size / 2;
	$edge = $size / 3;

	# Create the image and its colours.
	$image = ImageCreate($size,$size);
	$black = ImageColorAllocate($image, 0, 0, 0);
	$beige = ImageColorAllocate($image, 153, 153, 102);
	$light_beige = ImageColorAllocate($image, 204, 204, 176);
	$white = ImageColorAllocate($image, 255, 255, 255);
	$trans = ImageColorTransparent($image, $white);

	# Fill the image and draw the solid H.
	ImageFill($image, 0, 0, $white);
	ImageFilledRectangle($image, $margin, $margin, $edge, $size-$margin, $light_beige);
	ImageFilledRectangle($image, $edge, $edge, $size-$edge, $size-$edge, $light_beige);
	ImageFilledRectangle($image, $size-$edge, $margin, $size-$margin, $size-$margin, $light_beige);

	# Draw H - top section
	$points = array(
		$margin, $edge,
		$margin, $margin,
		$edge, $margin,
		$edge, $edge,
		$size-$edge, $edge,
		$size-$edge, $margin,
		$size-$margin, $margin,
		$size-$margin, $edge
	);
	multi_line($image, $points, $black);

	# Draw H - bottom section
	$points = array(
		$margin, $size-$edge,
		$margin, $size-$margin,
		$edge, $size-$margin,
		$edge, $size-$edge,
		$size-$edge, $size-$edge,
		$size-$edge, $size-$margin,
		$size-$margin, $size-$margin,
		$size-$margin, $size-$edge
	);
	multi_line($image, $points, $black);


	# Read the data file.
	require('../../peter/opinion/rotterdam_restaurants_data.php3');


	# Add the left and right labels.
	$label_x_width	= ImageFontWidth($font_size) * strlen($criteria[$x]);
	$label_left_y	=  ($size/2) + ($label_x_width/2);
	$label_right_y	= ($size/2) + ($label_x_width/2) + (2*ImageFontWidth($font_size));
	ImageStringUp($image, $font_size, 0, $label_left_y, $criteria[$x], $biege);
	ImageStringUp($image, $font_size, $size-$font_height, $label_right_y, "not " . $criteria[$x], $biege);

	# Add the top and bottom labels.
	$label_y_width	= ImageFontWidth($font_size) * strlen($criteria[$y]);
	$label_top_x	= ($size/2) - ($label_y_width/2);
	$label_bottom_x	= ($size/2) - ($label_y_width/2) - 2*ImageFontWidth($font_size);
	ImageString($image, $font_size, $label_top_x, 0, $criteria[$y], $biege);
	ImageString($image, $font_size, $label_bottom_x, $size-$font_height, "not " . $criteria[$y], $biege);



	# Add the ratings...

	# ... set the rankings (a code-to-ranking lookup for each of the two criteria.
	for ($index = 1; $index <= sizeof($name); $index++) {

		$restaurant_code_x = current($rankings[$x]);
		$restaurant_code_y = current($rankings[$y]);
		$ranking_x[$restaurant_code_x] = $index;
		$ranking_y[$restaurant_code_y] = $index;

		next($rankings[$x]);

		# ... but don't do both if both criteria are the same.
		if ($x != $y) {
			next($rankings[$y]);
		}
	}



	# ... set the spacings.

	$spacing = $size / (sizeof($name)+1);
	$rating_font_size = $font_size+1;

	$offset_x = ImageFontWidth($rating_font_size)/2;
	$offset_y = ImageFontHeight($rating_font_size)/2;

	# ... display the numbers.
	for ($index=1; $index <= sizeof($name); $index++) {
		$code = key($name);
		ImageString($image, $rating_font_size, $ranking_x[$code]*$spacing - $offset_x, $ranking_y[$code]*$spacing - $offset_y, $index, $black);
		next($name);
	}

	# Generate the image.
	ImageGIF($image);
?>

