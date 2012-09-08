<?php

	# Restaurant name lookup, in order of preference.
	$name = array(
		'op' => 'Ristorante O\'Pazzo',
		'ho' => 'Hotel New York',
		'ca' => 'Cambrinus',
		'pi' => 'De Pijp',
		'du' => 'Dudok',
		'to' => 'Toen-Cafe',
		'in' => 'Restaurant Indonesia',
		'et' => 'Eten',
		'ps' => 'Pssst Amigo',
		'do' => 'Doris &amp; Mey',
		'cr' => 'Crystal Palace',
		'ba' => 'Bazar',
		'po' => 'Popocatepetl'
	);

	# For each criterion, an ordered list of restaurant codes.
	$rankings = array(
		'ambiance'	=> array('op','to','ba','ca','et','do','pi','ho','du','ps','cr','po','in'),
		'service'	=> array('cr','et','in','ho','ca','pi','ps','du','to','do','op','ba','po'),
		'size'		=> array('ho','du','ba','op','cr','et','in','ps','to','ca','do','po','pi'),
		'poshness'	=> array('et','cr','ho','op','du','in','pi','ca','do','to','po','ps','ba'),
		'stylishness'	=> array('op','do','et','ba','ho','to','cr','du','pi','ps','in','ca','po'),
		'quality'	=> array('et','cr','op','in','ho','ca','du','pi','ps','po','to','do','ba'),
		'price'		=> array('et','cr','op','ho','ca','du','pi','in','po','ps','to','do','ba'),
		'value'		=> array('in','ca','op','ps','ba','do','pi','to','ho','et','po','du','cr'),
		'variety'	=> array('cr','in','ho','du','pi','ps','ba','po','op','to','et','do','ca')
	);
	
	$criteria = array(
		'ambiance'	=> 'good ambiance',
		'service'	=> 'good service',
		'size'		=> 'big',
		'poshness'	=> 'posh',	
		'stylishness'	=> 'stylish',	
		'quality'	=> 'good food',	
		'price'		=> 'expensive',	
		'value'		=> 'good value',		
		'variety'	=> 'varied menu'	
	);
?>
