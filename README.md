# What Time is Meow?

Repository to extend a project started on Codepen, in order to safeguard it from the possibility of my cats stepping on the keyboard at an inopportune time and losing all of my code.

**Cat Diagram**

![CatDiagram](./src/images/catDiagram.png)

## Default Properties

Default options for the appearance of generated cats can be found and altered in [defaultOptions.js](./src/utils/defaultOptions.js);

Originally set defaults are as follows:

```javascript
const defaultOptions = {
  // Entire page
  backgroundColor: "black",
  // Eyes
  browRidgeHeight: "90px",
  eyesSVGPosition: "relative",
  eyesSVGHeight: "100px",
  eyesSVGWidth: "120px",
  eyesSVGPaddingTop: "5px",
  eyesSVGPaddingLeft: "35px",
  pupilColor: "black",
  leftScleraColor: "white",
  rightScleraColor: "white",
  rightPupilColor: "white",
  leftPupilColor: "white",
  scleraColor: "white",
  scleraOutlineWidth: 2,
  scleraOutlineColor: "#000",
  // Arms
  leftFrontPawSize: "50px",
  leftFrontPawRadius: "80%",
  leftFrontPawMarginRight: "-25px",
  rightFrontPawSize: "50px",
  rightFrontPawRadius: "80%",
  rightFrontPawMarginLeft: "-30px",
  // Legs
  leftBackPawHeight: "50px",
  leftBackPawWidth: "50px",
  leftBackPawBorderRadius: "50%",
  leftBackPawMarginTop: "-40px",
  rightBackPawHeight: "50px",
  rightBackPawWidth: "50px",
  rightBackPawBorderRadius: "50%",
  rightBackPawMarginTop: "-40px",
  // Cat
  catMargin: "auto",
  catWidth: "380px",
  catColor: "yellow",
  // Ears
  leftEarHeight: "70px",
  rightEarHeight: "70px",
  // Clock
  clockHeight: "300px",
  clockWidth: "300px",
  clockFaceColor: "rgb(255, 255, 255, 0.3)",
  secondHandPointColor: "purple",
  clockOutlineColor: "black",
  secondHandColor: "#D40000",
  minuteHandColor: "black",
  hourHandColor: "black",
  minuteMarksColor: "black",
  hourMarkColor: "black",
  // Head
  headWidth: "50%",
  headHeight: "100px",
  headBorderRadius: "50%",
  headMargin: "-30px auto",
  // Nose
  noseWidth: "40px",
  noseHeight: "12px",
  noseColor: "pink",
  noseBorderRadius: "20px / 10px",
  noseMargin: "-40px auto auto calc(50% - 15px)",
  nostrilMarginTop: "7px",
  nostrilHeight: "2.5px",
  nostrilWidth: "2.5px",
  nostrilColor: "black",
  nostrilBorderRadius: "50%",
  philtrumHeight: "10px",
  philtrumWidth: "5px",
  philtrumMargin: "0 calc(50% + 3px)",
  // Mouth
  lipWidth: "22px",
  lipHeight: "10px",
  lipBottomLeftRadius: "15px",
  lipBottomRightRadius: "15px",
  lipBorder: ".5px solid black",
  lipBorderTop: "0",
  mouthMargin: "auto 23% auto auto",
  // Torso
  torsoHeight: "300px",
  torsoWidth: "75%",
  torsoBorderRadius: "50%",
  // Tail
  tailRightBorderWidth: "40px",
  tailBottomBorderWidth: "0px",
  tailWidth: "230px",
  tailHeight: "200px",
  tailMarginRight: "230px",
  tailCurve: "200px",
  tailMarginTop: "-30px"
};
```

## To Create a Cat

In index.js:

1. Initialize a cat factory by intiantiating a new CatFactory class (e.g., `let catFactory = new CatFactory()`)
2. Start creating cats using the `create` method on `CatFactory`! (Be sure to add them to the `catList` array)

### To Create a Cat with a Specific Timezone

Pass a timezone description as the first argument to `create` function.

Timezone options are:

```
  'Africa/Abidjan',
  'Africa/Accra',
  'Africa/Algiers',
  'Africa/Bissau',
  'Africa/Cairo',
  'Africa/Casablanca',
  'Africa/Ceuta',
  'Africa/El_Aaiun',
  'Africa/Johannesburg',
  'Africa/Juba',
  'Africa/Khartoum',
  'Africa/Lagos',
  'Africa/Maputo',
  'Africa/Monrovia',
  'Africa/Nairobi',
  'Africa/Ndjamena',
  'Africa/Sao_Tome',
  'Africa/Tripoli',
  'Africa/Tunis',
  'Africa/Windhoek',
  'America/Adak',
  'America/Anchorage',
  'America/Araguaina',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Catamarca',
  'America/Argentina/Cordoba',
  'America/Argentina/Jujuy',
  'America/Argentina/La_Rioja',
  'America/Argentina/Mendoza',
  'America/Argentina/Rio_Gallegos',
  'America/Argentina/Salta',
  'America/Argentina/San_Juan',
  'America/Argentina/San_Luis',
  'America/Argentina/Tucuman',
  'America/Argentina/Ushuaia',
  'America/Asuncion',
  'America/Atikokan',
  'America/Bahia',
  'America/Bahia_Banderas',
  'America/Barbados',
  'America/Belem',
  'America/Belize',
  'America/Blanc-Sablon',
  'America/Boa_Vista',
  'America/Bogota',
  'America/Boise',
  'America/Cambridge_Bay',
  'America/Campo_Grande',
  'America/Cancun',
  'America/Caracas',
  'America/Cayenne',
  'America/Chicago',
  'America/Chihuahua',
  'America/Costa_Rica',
  'America/Creston',
  'America/Cuiaba',
  'America/Curacao',
  'America/Danmarkshavn',
  'America/Dawson',
  'America/Dawson_Creek',
  'America/Denver',
  'America/Detroit',
  'America/Edmonton',
  'America/Eirunepe',
  'America/El_Salvador',
  'America/Fort_Nelson',
  'America/Fortaleza',
  'America/Glace_Bay',
  'America/Godthab',
  'America/Goose_Bay',
  'America/Grand_Turk',
  'America/Guatemala',
  'America/Guayaquil',
  'America/Guyana',
  'America/Halifax',
  'America/Havana',
  'America/Hermosillo',
  'America/Indiana/Indianapolis',
  'America/Indiana/Knox',
  'America/Indiana/Marengo',
  'America/Indiana/Petersburg',
  'America/Indiana/Tell_City',
  'America/Indiana/Vevay',
  'America/Indiana/Vincennes',
  'America/Indiana/Winamac',
  'America/Inuvik',
  'America/Iqaluit',
  'America/Jamaica',
  'America/Juneau',
  'America/Kentucky/Louisville',
  'America/Kentucky/Monticello',
  'America/La_Paz',
  'America/Lima',
  'America/Los_Angeles',
  'America/Maceio',
  'America/Managua',
  'America/Manaus',
  'America/Martinique',
  'America/Matamoros',
  'America/Mazatlan',
  'America/Menominee',
  'America/Merida',
  'America/Metlakatla',
  'America/Mexico_City',
  'America/Miquelon',
  'America/Moncton',
  'America/Monterrey',
  'America/Montevideo',
  'America/Nassau',
  'America/New_York',
  'America/Nipigon',
  'America/Nome',
  'America/Noronha',
  'America/North_Dakota/Beulah',
  'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem',
  'America/Ojinaga',
  'America/Panama',
  'America/Pangnirtung',
  'America/Paramaribo',
  'America/Phoenix',
  'America/Port-au-Prince',
  'America/Port_of_Spain',
  'America/Porto_Velho',
  'America/Puerto_Rico',
  'America/Punta_Arenas',
  'America/Rainy_River',
  'America/Rankin_Inlet',
  'America/Recife',
  'America/Regina',
  'America/Resolute',
  'America/Rio_Branco',
  'America/Santarem',
  'America/Santiago',
  'America/Santo_Domingo',
  'America/Sao_Paulo',
  'America/Scoresbysund',
  'America/Sitka',
  'America/St_Johns',
  'America/Swift_Current',
  'America/Tegucigalpa',
  'America/Thule',
  'America/Thunder_Bay',
  'America/Tijuana',
  'America/Toronto',
  'America/Vancouver',
  'America/Whitehorse',
  'America/Winnipeg',
  'America/Yakutat',
  'America/Yellowknife',
  'Antarctica/Casey',
  'Antarctica/Davis',
  'Antarctica/DumontDUrville',
  'Antarctica/Macquarie',
  'Antarctica/Mawson',
  'Antarctica/Palmer',
  'Antarctica/Rothera',
  'Antarctica/Syowa',
  'Antarctica/Troll',
  'Antarctica/Vostok',
  'Asia/Almaty',
  'Asia/Amman',
  'Asia/Anadyr',
  'Asia/Aqtau',
  'Asia/Aqtobe',
  'Asia/Ashgabat',
  'Asia/Atyrau',
  'Asia/Baghdad',
  'Asia/Baku',
  'Asia/Bangkok',
  'Asia/Barnaul',
  'Asia/Beirut',
  'Asia/Bishkek',
  'Asia/Brunei',
  'Asia/Chita',
  'Asia/Choibalsan',
  'Asia/Colombo',
  'Asia/Damascus',
  'Asia/Dhaka',
  'Asia/Dili',
  'Asia/Dubai',
  'Asia/Dushanbe',
  'Asia/Famagusta',
  'Asia/Gaza',
  'Asia/Hebron',
  'Asia/Ho_Chi_Minh',
  'Asia/Hong_Kong',
  'Asia/Hovd',
  'Asia/Irkutsk',
  'Asia/Jakarta',
  'Asia/Jayapura',
  'Asia/Jerusalem',
  'Asia/Kabul',
  'Asia/Kamchatka',
  'Asia/Karachi',
  'Asia/Kathmandu',
  'Asia/Khandyga',
  'Asia/Kolkata',
  'Asia/Krasnoyarsk',
  'Asia/Kuala_Lumpur',
  'Asia/Kuching',
  'Asia/Macau',
  'Asia/Magadan',
  'Asia/Makassa',
  'Asia/Manila',
  'Asia/Nicosia',
  'Asia/Novokuznetsk',
  'Asia/Novosibirsk',
  'Asia/Omsk',
  'Asia/Oral',
  'Asia/Pontianak',
  'Asia/Pyongyang',
  'Asia/Qata',
  'Asia/Qostanay',
  'Asia/Qyzylorda',
  'Asia/Riyadh',
  'Asia/Sakhalin',
  'Asia/Samarkand',
  'Asia/Seoul',
  'Asia/Shanghai',
  'Asia/Singapore',
  'Asia/Srednekolymsk',
  'Asia/Taipei',
  'Asia/Tashkent',
  'Asia/Tbilisi',
  'Asia/Tehran',
  'Asia/Thimphu',
  'Asia/Tokyo',
  'Asia/Tomsk',
  'Asia/Ulaanbaata',
  'Asia/Urumqi',
  'Asia/Ust-Nera',
  'Asia/Vladivostok',
  'Asia/Yakutsk',
  'Asia/Yangon',
  'Asia/Yekaterinburg',
  'Asia/Yerevan',
  'Atlantic/Azores',
  'Atlantic/Bermuda',
  'Atlantic/Canary',
  'Atlantic/Cape_Verde',
  'Atlantic/Faroe',
  'Atlantic/Madeira',
  'Atlantic/Reykjavik',
  'Atlantic/South_Georgia',
  'Atlantic/Stanley',
  'Australia/Adelaide',
  'Australia/Brisbane',
  'Australia/Broken_Hill',
  'Australia/Currie',
  'Australia/Darwin',
  'Australia/Eucla',
  'Australia/Hobart',
  'Australia/Lindeman',
  'Australia/Lord_Howe',
  'Australia/Melbourne',
  'Australia/Perth',
  'Australia/Sydney',
  'Europe/Amsterdam',
  'Europe/Andorra',
  'Europe/Astrakhan',
  'Europe/Athens',
  'Europe/Belgrade',
  'Europe/Berlin',
  'Europe/Brussels',
  'Europe/Bucharest',
  'Europe/Budapest',
  'Europe/Chisinau',
  'Europe/Copenhagen',
  'Europe/Dublin',
  'Europe/Gibralta',
  'Europe/Helsinki',
  'Europe/Istanbul',
  'Europe/Kaliningrad',
  'Europe/Kiev',
  'Europe/Kirov',
  'Europe/Lisbon',
  'Europe/London',
  'Europe/Luxembourg',
  'Europe/Madrid',
  'Europe/Malta',
  'Europe/Minsk',
  'Europe/Monaco',
  'Europe/Moscow',
  'Europe/Oslo',
  'Europe/Paris',
  'Europe/Prague',
  'Europe/Riga',
  'Europe/Rome',
  'Europe/Samara',
  'Europe/Saratov',
  'Europe/Simferopol',
  'Europe/Sofia',
  'Europe/Stockholm',
  'Europe/Tallinn',
  'Europe/Tirane',
  'Europe/Ulyanovsk',
  'Europe/Uzhgorod',
  'Europe/Vienna',
  'Europe/Vilnius',
  'Europe/Volgograd',
  'Europe/Warsaw',
  'Europe/Zaporozhye',
  'Europe/Zurich',
  'Indian/Chagos',
  'Indian/Christmas',
  'Indian/Cocos',
  'Indian/Kerguelen',
  'Indian/Mahe',
  'Indian/Maldives',
  'Indian/Mauritius',
  'Indian/Reunion',
  'Pacific/Apia',
  'Pacific/Auckland',
  'Pacific/Bougainville',
  'Pacific/Chatham',
  'Pacific/Chuuk',
  'Pacific/Easter',
  'Pacific/Efate',
  'Pacific/Enderbury',
  'Pacific/Fakaofo',
  'Pacific/Fiji',
  'Pacific/Funafuti',
  'Pacific/Galapagos',
  'Pacific/Gambier',
  'Pacific/Guadalcanal',
  'Pacific/Guam',
  'Pacific/Honolulu',
  'Pacific/Kiritimati',
  'Pacific/Kosrae',
  'Pacific/Kwajalein',
  'Pacific/Majuro',
  'Pacific/Marquesas',
  'Pacific/Nauru',
  'Pacific/Niue',
  'Pacific/Norfolk',
  'Pacific/Noumea',
  'Pacific/Pago_Pago',
  'Pacific/Palau',
  'Pacific/Pitcairn',
  'Pacific/Pohnpei',
  'Pacific/Port_Moresby',
  'Pacific/Rarotonga',
  'Pacific/Tahiti',
  'Pacific/Tarawa',
  'Pacific/Tongatapu',
  'Pacific/Wake',
  'Pacific/Wallis'
  ```


### To Style a Cat on Creation

Pass an object of style descriptions as the second argument to `create` function.

e.g. `let sidneyCat = catFactory.create("Australia/Sydney", { catColor: "green" });`

### To Style a Cat After Creation

Access the cat you'd like to style, then call `addStyles` on that cat, passing in a style object like you would during cat creation.

### Digital Clock Mode

In order to configure a cat to use a digital clock rather than an analog one, pass `{digitalClock: true}` to the create function.

The border color maps to `defaultOptions.clockOutlineColor`. The background color maps to `defaultOptions.clockFaceColor`. The color for the numbers associated with the hour are mapped to `defaultOptions.hourHandColor`. The color for the numbers associated with the minute are mapped to `defaultOptions.minuteHandColor`. The color for the numbers associated with the second are mapped to `defaultOptions.secondHandColor`.

You can opt to use military time (24-hour) by passing `{militaryTime: true}` to the create function.

### Ear/Mouth/Tail Animation

There is an optional animation included in the package that makes the cat tails swish back and forth and their ears lean from side to side.  If you'd like to utilize this optional animation, simply import it from the package and call it after creating your cats.

```
import { catFactory, animation } from 'what-time-is-meow'

function App () {
  catFactory.create();
  animation();
  return (
    // Whatever else you'd like to render
  )
}
```

## Example Usage

In index.js:

```javascript
// Import catFactory to create cats, animation to get tail/ear animation, and defaultOptions to modify defaults
import { catFactory, animation, defaultOptions } from 'what-time-is-meow';

// Create whatever cats you'd like, passing in whatever options you'd like
let localCat = catFactory.create();
let sidneyCat = catFactory.create(`Australia/Sydney`, { catColor: "green" });
let londonCat = catFactory.create("Europe/London", { catColor: "red" });
let berlinCat = catFactory.create("Europe/Berlin", {
  catColor: "rebeccapurple",
  tailColor: "green"
});
// Using the catList array on catFactory allows you to target cats for styling
const catList = catFactory.catList;
// To change the styling of a cat after creation, use addStyles
catList[2].addStyles({
  leftEyeColor: "blue",
  minuteMarkColor: "grey",
  headColor: "fuchsia"
});
catList[1].addStyles({
  leftBackPawColor: "red",
  secondHandColor: "white",
  clockFaceColor: "rgb(23, 25, 22, 0.3)"
});

// In order to get tail/ear/mouth animation working, invoke the animation function
animation();
```

### Notes

#### Clock Height and Clock Width

This template changes the clockWidth and clockHeight after initializing the defaultOptions object (alterations can be found in the [defaultOptions.js](./src/utils/defaultOptions.js) file) in order to check if the digitalClock mode is activated or not -- the width and height are different in analog and digital modes.

