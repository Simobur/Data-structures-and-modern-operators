'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed'];
const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adress,
  }) {
    console.log(
      `Your ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]},
      will be delivery to ${adress}, at ${time}`
    );
  },

  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`It is your pasta with: ${ing1}, ${ing2} and ${ing3}`);
  // },
  // orderPizza: function (mainIngredient, ...restIngredient) {
  //   console.log(mainIngredient, restIngredient);
  // },
};
/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  let x = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`At ${day} we are opening at ${x}`);
}

console.log(restaurant.order?.(1, 2) ?? "Method don't exist");
console.log(restaurant.orderPasta?.(1, 2) ?? "Method don't exist");

const users = [{ name: 'Szymon', age: '31' }];
// const users = [];

console.log(users[0]?.name ?? 'User arry is empty');
*/
// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Przejazdowa 22',
//   starterIndex: 2,
//   mainIndex: 1,
// });

// restaurant.orderDelivery({
//   adress: 'Przejazdowa 2552',
//   starterIndex: 2,
// });

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Italiano',
  owner: 'Giovani Rossi',
};

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
/*
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1, rest2);

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1, rest2);

rest1.owner = rest1.owner && 'Annymous';
rest2.owner &&= 'Annymous';

console.log(rest1, rest2);
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nulish: null, undefined (NOT 0, ' ')
const guests2 = restaurant.numGuests ?? 10;
console.log(guests2);

/*
// Use Any data type, return Any data type, short-circuting

restaurant.quests = 5;
const x = restaurant.quests || 10;
console.log(x);

console.log('' || null || undefined || 'Hiho' || 23);

console.log('-----AND----');
console.log(23 && 'Hey!' && 233);
console.log('hello' && 23 && null && 'name');

if (restaurant.orderPizza) {
  restaurant.orderPizza('pieczarki', 'szynka', 'salami');
}

restaurant.orderPizza && restaurant.orderPizza('pieczarki', 'szynka', 'salami');

/*
restaurant.orderPizza('pieczarki', 'kukurydza', 'salami');
restaurant.orderPizza('pieczarki');

// const ingredients = [
//   prompt('Podaj skladniki! 1 skladnik: '),
//   prompt('2 skladnik: '),
//   prompt('3 skladnik:'),
// ];
// restaurant.orderPasta(...ingredients);
//               it will be: element[0], element [1], element [2]

// object:

const newRestaurant = { foundedIn: 1992, ...restaurant, founder: 'Guessepe' };
console.log(newRestaurant);

console.log(restaurant);

const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 4, 2, 3, , 3];
console.log(a, b, others);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions:

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return console.log(sum);
};
add(2, 3);
add(2, 3, 1, 2, 5, 2, 3);

const x = [23, 5, 7];

add(...x);

/*
const arr = [1, 3, 4];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Spaghetti'];
console.log(newMenu);

// coppy arr;

const copiedMenu = [...restaurant.mainMenu];

//Join 2 menus:
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

//Spread operator with String:
const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(...letters);
console.log(...str, ' S.');

/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Defoult values:
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating values:
let a = 100,
  b = 999;
const object = { a: 22, b: 1, c: 13 };
({ a, b } = object);
console.log(a, b);

//nested Object:
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
  fri: newFri,
} = openingHours;
console.log(o, c, newFri);

/*
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const [third, , fourth] = restaurant.categories;
// console.log(third, fourth);

// Switch variables with temporary
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructing
const nested = [1, 2, 3, [5, 4]];
const [i, , , j] = nasted;

console.log(i, j);

const [k, , , [l, m]] = nasted;
console.log(k, l, m);

//Default values:

const [a = 1, b = 1, c = 1] = [8, 9];
console.log(a, b, c);

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [goal, name] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${name}`);
}
// console.log(Object.values(game.odds));
let sum = 0;
for (const x of Object.values(game.odds)) {
  sum += x;
}
console.log(sum / Object.entries(game.odds).length);

const values = Object.values(game);
// console.log(values);

const keys = Object.keys(game);
// console.log(keys);

const names = Object.entries(game);
// console.log(names);

// for (const x of keys) {
//   console.log(x);
//   console.log(game[x]);
//   console.log(game.odd[x] ?? game.odd[x]);
// }

for (const [name, odd] of Object.entries(game.odds)) {
  const isItDraw = name === 'x' ? 'draw' : `victory ${game[name]}`;

  console.log(`Odd of ${isItDraw} is a ${odd} points`);
}

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Drawn is: ${game.odds.team1}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
console.log('-------------');

// const scorers = {
//   lewandowski: 1,
//   gnarby: 1,
// };

const scorers = {};

// const check = function (name) {
//   console.log(scorers[name] ?? (scorers[name] = 0));
//   scorers[name]++;
// };
console.log(scorers);
for (const name of game.scored) {
  scorers[name] ?? (scorers[name] = 0);
  scorers[name]++;
}

// console.log(check('lewandowski'));
// console.log(scorers.lewandowski);
// check('lewandowski');
// check('lewandowski');
// check('humels');
// check('lewandowski');
console.log(scorers);

// for (const [name, value] of )
/*
// const players = [...game.players];
// console.log(players);

// const [players1, players2] = game.players;
const [[...players1]] = game.players;
console.log(players1);

const [, [...players2]] = game.players;
console.log(players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const players = [...players1, ...players2];
console.log(players);

const player1Final = [...players1, 'Tiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// const printGoals = function (player) {
//   for (let i = 0; i < player.length; i++)
//     console.log(`${player[i]} take a goal!
//     Total score are: ${i + 1}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Lewandowski');

const printGoals = function (...player) {
  for (let i = 0; i < player.length; i++)
    console.log(`${player[i]} take a goal! 
    Total score are: ${i + 1}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Lewandowski');
printGoals(...game.scored);

console.log(
  (team1 > team2 && 'Team 2 is more likely to win') ||
    (team1 < team2 && 'Team 1 is more likely to win')
);

/*
for (const day of Object.keys(openingHours)) {
  console.log(`We are opening at ${day}`);
}
const x = Object.keys(openingHours);
console.log(x);

let str = `We are opening ${x.length} days. And is at: `;
for (const day of x) {
  str += `${day}, `;
}
console.log(str);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`At ${day} we are opening at ${open}, and close at ${close}`);
}
*/
