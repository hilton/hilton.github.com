---
title: CSS date rules
description: The next innovation for dynamic CSS style sheets
layout: hh
tags: design
image: css-date-rule.png
---

Successive major releases of [Cascading Style Sheets (CSS)](https://en.wikipedia.org/wiki/CSS)
have many style sheets more dynamic, with calculated values and animation.
This allows front-end developers to replace JavaScript code with declarative CSS rules that affect behaviour over time.

The next step for dynamic CSS introduces _CSS date rules_, to allow style sheets to change on a calendar schedule.
CSS date rules.

## Specific dates

CSS date rules use a similar syntax to CSS media type sections that use the `@media` syntax.
The simplest syntax declares that a section only applies to a specific date:

    @date 2024-02-14 {
      // 💘 Valentine’s day theme
    
    }

Here, and in many places in the CSS date rule syntax, you can specify a comma-separated list of multiple values:

    @date 2024-12-25, 2025-12-25, 2026-12-25 {
      // 🎄 Christmas day theme
    
    }

Note that CSS date rules do not specify time zones.
All dates refer to the date in the user agent‘s local time.

## Date ranges

You can also specify multiple dates as a range between two dates, including the start and end dates.
For example, the two-day period commonly called _summer_ in England:

    @date 2024-08-13… 2024-08-14 {
      // ⛅️ UK summer seasonal theme
    
    }

Note that while the syntax uses an ellipsis character, for aesthetic reasons, you can also use
[ISO 8601 time intervals](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals),
which separates dates using a forward slash:

    @date 2024-08-13/2024-08-14 {
      // UK summer seasonal theme
    
    }

## Repeating dates

You can specify that dates repeat on regular intervals, so you don’t have to update your style sheets on the first of January every year, when you update the copyright statement’s year number:

    @date 2024-02-14 repeat every year {
      // 💘 Valentine’s day theme
    
    }

Weekly repetitions can specify particular weekdays, so you don’t have to know the start date’s weekday:

    @date 2024-01-01 repeat every week on saturday, sunday {
      // 👯 Weekend theme
    
    }

Similarly, monthly repetitions allow more complex rules:

    @date 2024-01-01 repeat every month on the last thursday {
      // Show monthly meet-up banner
    
    }

Basic syntax:

    repeat every day
    repeat every week
    repeat every month on 14
    repeat every month on the first day
    repeat every month on the second weekday
    repeat every month on the last weekend day
    repeat every year

Repetition intervals, which support `1` to simplify code changes:

    repeat every 3 days
    repeat every 1 weeks
    repeat every 4 weeks
    repeat every 1 months
    repeat every 5 years

Weekly repetitions can occur on one or more specific weekdays:

    repeat every week on monday
    repeat every week on thursday, friday, saturday

Monthly repetitions can occur on one or more specific or relative days of the month:

    repeat every month on 1
    repeat every month on 1, 15
    repeat every month on the first wednesday
    repeat every month on the last thursday
    repeat every month on the second day
    repeat every month on the second weekday
    repeat every month on the second weekend day

Annual repetitions can occur on one or more specific months or relative days of the month:

    repeat every year in january
    repeat every year in march, june, september, december
    repeat every year on the first weekday
    repeat every year on the second day
    repeat every year on the last friday

Various parts of the syntax are optional, so you can:

* omit `every`, e.g. `repeat 2 days`
* omit plurals, e.g. `repeat 2 day`
* omit `on`, e.g. `repeat every week monday`
* omit `on the`, e.g. `repeat every month first monday`
* omit `in`, e.g. `repeat every year december`

You can also mix case, e.g. `repeat every week on Monday`, so you can use correct spelling.

## Browser support

Unfortunately, CSS date rules have yet to gain support from any major web browsers.
In fact, CSS date rules do not even appear in the CSS standard.
I seem to have made the whole thing up.
Sorry.
