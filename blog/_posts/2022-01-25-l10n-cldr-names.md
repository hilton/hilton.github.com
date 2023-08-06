---
title: Localise names with the CLDR
description: Using the Unicode Common Locale Data Repository’s standard translations
layout: hh
tags: data DDD
image: currency.jpg
---

![](currency.jpg)

[Jason Leung](https://unsplash.com/photos/SAYzxuS1O3M){:.photocredit}

<!--
language `ru` 
script `Cyrl` 
territory `RU`
xidel en.xml --xpath "/ldml/dates/calendars/calendar[@type='gregorian']/months/monthContext[@type='format']/monthWidth[@type='wide']/month[@type='1']"
xidel fr.xml --xpath "/ldml/dates/calendars/calendar[@type='gregorian']/days/dayContext[@type='format']/dayWidth[@type='wide']/day[@type='mon']"
xidel fr.xml --xpath "/ldml/dates/calendars/calendar[@type='gregorian']/quarters/quarterContext[@type='format']/quarterWidth[@type='wide']/quarter[@type='1']"
metazone `Moscow`
currency `RUB`   
xidel fr.xml --xpath "/ldml/units/unitLength[@type='long']/unit[@type='length-meter']/displayName"
axisName `ital`     
-->

*[CLDR]: Unicode Common Locale Data Repository

[Language localisation](https://en.wikipedia.org/wiki/Language_localisation), part of the broader 
[internationalisation and localisation](https://en.wikipedia.org/wiki/Internationalization_and_localization) topic,
includes translating text to a local language for a particular _locale_.
In this context, a [locale identifier](https://en.wikipedia.org/wiki/Locale_(computer_software))
refers to a language associated with a specific geographic region, such as _British English_.

The [Unicode Common Locale Data Repository](https://cldr.unicode.org/) (CLDR)
contains a wide variety of locale-specific names, data formats, and validation rules, as well as details of various languages and scripts.
You can use this data for standard localisations in your software.

## CLDR lists

CLDR includes a number of standard lists, translated into each language.
For example, each of the following is an entry in a (sometimes long) list.

|                | English (`en`) | French (`fr`)   | Russian (`ru`)   | Japanese (`ja`) | Thai (`th`) |
| -------------- | -------------- | --------------- | ---------------- | --------------- | ----------- |
| **Languages**  | Russian        | russe           | русский          | ロシア語         | รัสเซีย |
| **Scripts**    | Cyrillic       | cyrillique      | кириллица        | キリル文字       | ซีริลลิก |
| **Regions**    | Russia         | Russie          | Россия           | ロシア           | รัสเซีย |
| **Months**     | January        | janvier         | января           | 1月             | มกราคม |
| **Days**       | Monday         | lundi           | понедельник      | 月曜日          | วันจันทร์ |
| **Quarters**   | Q1             | 1er trimestre   | 1-й квартал      | 第1四半期        | ไตรมาส 1 |
| **Time zones** | Moscow Time    | heure de Moscou | Москва           | モスクワ時間     | เวลามอสโก |
| **Currencies** | Russian Ruble  | rouble russe    | российский рубль | ロシア ルーブル   | รูเบิลรัสเซีย |
| **Units**      | meters         | mètres          | метры            | メートル         | เมตร |
| **Typography** | italic         | italique        | курсив           | イタリック       | ตัวเอียง |

CLDR translations - excluding the more obscure lists - include the names of:

* languages
* scripts ([writing systems](https://en.wikipedia.org/wiki/Writing_system))
* territories, including countries
* calendar names - quarters, months and weekdays, including abbreviations
* time zones
* currencies
* units of measurement
* typographic styles

This means that if you can use CLDR as a source for a list of countries, with translations to different languages, where each country is identified by its
[ISO 3166-1 two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

In general, if you display these kinds of lists or selections in software, and you want to localise your software into multiple languages, you can get the translations from CLDR.
Each entry has a code that all localisations share for looking up entries, sometimes a standard code as for countries, and sometimes a simple numeric code.
You can also use lists of these codes to include or exclude sub-lists.

## Filtered lists

To get a list of currency names, you first need to filter the list to exclude what you don’t consider proper currencies.
You can include most of the [ISO 4127](https://en.wikipedia.org/wiki/ISO_4217)
currencies whose three-letter currency codes follow the pattern for a two-letter country code followed by the currency name’s initial, such as `USD` (US Dollar).
However, you should exclude the X currencies such as `XAU` (gold), deprecated currencies such as `RUR` (Russian Ruble 1991-1998), and the unknown currency `XXX`.

Similarly, you also need to filter the CLDR _territories_ to get a countries list.
You can exclude large regions with three-digit codes such as `151` (Eastern Europe),
and regions with two-letter codes: `EU` (European Union), `EZ` (Eurozone), `QO` (Outlying Oceania), and `UN` (United Nations).
After that, [it gets complicated](https://en.wikipedia.org/wiki/List_of_states_with_limited_recognition).

In general, depending on which list you want, you may need to filter its contents.
CLDR helps with this by including _validity data_ that divides these lists’ entries into categories:

* regular
* special
* deprecated
* reserved
* private use
* unknown

## Published data

The [CLDR releases](https://cldr.unicode.org/index/downloads) page publishes the data in XML format,
whose source resides in the [cldr GitHub Project](https://github.com/unicode-org/cldr).
The source includes one XML per locale, e.g. `en.xml`.
These XML files use the [Unicode Locale Data Markup Language](http://www.unicode.org/reports/tr35/) (LDML).

The [cldr-json](https://github.com/unicode-org/cldr-json)
GitHub Project generates JSON representations from the XML source.
This is [also available via npm](https://github.com/unicode-org/cldr-json#npm-packages).
Finally, various software libraries make CLDR available directly via their own APIs.

## Essential complexity

You can easily get lost in the CLDR’s complexity, which reflects the world’s messiness.
However, when you internationalise and localise software, you will find accurate locale data both valuable and satisfying.
