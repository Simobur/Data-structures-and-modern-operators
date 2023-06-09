'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
/*
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
/*
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
/*
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
*/
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
/*
console.log('----------------');

const newSet = new Set(['Pizza', 'Pasta', 'Bread', 'Pizza', 'Risotto']);

console.log(newSet);
console.log(newSet.size);
console.log(newSet.add('Drink'));
console.log(newSet.has('Pizza'));

for (const order of newSet) {
  console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];

const staffSet = new Set(staff);
console.log(staffSet);

// const uniqueStaffArry = [];
// for (const unique of staffSet) {
//   uniqueStaffArry.push(unique);
// }
// console.log(uniqueStaffArry);

const newUnique = [...new Set(staff)];
console.log(newUnique);
*/
/*
const newMap = new Map();

newMap.set('name', 'Classic Name');
newMap.set('loc1', 'Raciborz');
newMap.set('loc2', 'Kietrz');
newMap.set('open', 11);
newMap.set('close', 22);
newMap.set(true, 'We are open');
newMap.set(false, 'We are closed');

const time = 20;
console.log(newMap.get('open'));

console.log(
  newMap.get(time >= newMap.get('open') && time <= newMap.get('close'))
);

const arr = [1, 2];
newMap.set(arr, 'test');
console.log(newMap.get(arr));

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!!!'],
  [false, 'Try again!'],
]);

//Convert object to map:
console.log(question);
console.log(openingHours);
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// let answer = Number(prompt('Your answer?'));
let answer = 3;
console.log(question.get(answer === question.get('correct')));

// answer === question.get('correct')
//   ? console.log(question.get(true))
//   : (answer = Number(prompt('Your answer?')));

console.log(question.entries());
console.log(question.keys());
console.log(question.values());
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1. Task:
const deleteDuplicate = new Set();

const nonDuplicateSet = [...new Set(gameEvents.values())];
console.log(nonDuplicateSet);
// console.log(nonDuplicateSet);
// console.log(nonDuplicateSet.keys());
for (const [minute, event] of gameEvents) {
  console.log(minute, event);
  deleteDuplicate.add(event);
}

const events = [...deleteDuplicate];
console.log(events);

//2. Delete one event:
gameEvents.delete(64);
console.log(gameEvents);

// const events = [...gameEvents];
// console.log(events);

// 3. average of events during 90minutes of game
const timeGame = 90;
console.log(
  `An event happend, on average every ${timeGame / gameEvents.size} minutes`
);

//4. Which half is?
for (const [min, event] of gameEvents) {
  min <= 45
    ? console.log(`[FIRST HALF] ${min}: ${event}`)
    : console.log(`[SECOND HALF] ${min}: ${event}`);
}

// if (x>45) { 'FIRST HALF' x: GOAL!};
*/

//TODO: Work with strings

const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r')); // Position from front
console.log(airLine.lastIndexOf('r')); // Position from back

console.log(airLine.indexOf('Portugal')); //Point of starting a position of Portugal string
console.log(airLine.slice(4)); // Make substring from position 4,
console.log(airLine.slice(4, 7)); // Make substring from position 4, and end of before 7

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2)); // log last 2 positions
console.log(airLine.slice(1, -5)); // start from 1 pos, and stop 5 pos before end

// FIND A LAST LETTER:
const checkMiddleSeat = function (seat) {
  //B and E are in the middle

  const middle =
    seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? 'is' : 'isnt';
  console.log(`That seat ${middle} in the middle`);
};

checkMiddleSeat('11E');
checkMiddleSeat('31B');
checkMiddleSeat('22C');

console.log(airLine.toLowerCase()); // chcange to small letters
console.log(airLine.toUpperCase()); // change to big letters

const passanger = 'sZyMOn';

const correctName = function (string) {
  const lowerString = string.toLowerCase();
  const correctString = lowerString[0].toUpperCase() + lowerString.slice(1);
  return correctString;
};

console.log(correctName('maGDa'));

// Check email 'Comparing email'

const email = 'szymon@szymon.com';
const loginEmail = '   sZYmon@sZYmON.COm  \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
/// === loginEmail.toLowerCase -> return string so it is possible to get another string function on it
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const emailCheck = function (email) {
  const correctEmail = 'burekszymon@gmail.com';
  const typedEmail = email.toLowerCase().trim();
  return typedEmail === correctEmail ? 'Correct email' : 'Wrong email';
};

//replacing strings:
const pricePLN = '1056,70PLN';
const priceCZ = pricePLN.replace('PLN', 'KCZ').replace(',', '.');
console.log(priceCZ);

const announcement = 'All passangers came to bording door 23. To door 23!';

console.log(announcement.replaceAll('door', 'gate')); //All strings in that string

//Boleans values:

const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.startsWith('Aib'));
console.log(newPlane.endsWith('neo'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo'))
  console.log('That plane is from that familly ');

// Practise - baggage check:

const checkBaggage = function (items) {
  const checkItems = items.toLowerCase();
  const forbidenItems = ['gun', 'knife'];
  return checkItems.includes([forbidenItems])
    ? console.log('Forbidden')
    : console.log('Pass');
};

console.log(checkBaggage('Sads Knife'));

// TODO: Split Method

console.log('This+is+a+very+good+example'.split('+'));
console.log('Szymon Burek'.split(' '));

const [firstName, lastName] = 'Szymon Burek'.split(' ');

console.log(firstName, lastName);

// Join method:

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' space ');
console.log(newName);

const capitalization = function (name) {
  const smallName = name.toLowerCase().split(' ');
  const upperName = [];
  for (const word of smallName) {
    upperName.push(word[0].toUpperCase() + word.slice(1));
  }
  return upperName.join(' ');
};

console.log(capitalization('szymon burek'));

// Padding of string -

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //25 is a length of string
console.log(message.padEnd(25, '+'));

//

const maskCard = function (number) {
  const str = number + ''; // when we add string to someting is converted to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCard(33123132233));

// Repeat:

const message2 = 'Bad weather .. all departures Delayed...';
console.log(message2.repeat(10));

// function friend(friends) {
//   const newFriends = [];
//   for (const n of friends) {
//     if (n.length === 4) newFriends.push(n);
//   }
//   return newFriends;
//   // for (const friendName of friends) {
//   //   console.log(friendName.length);
//   //   if (friendName.length === 4) friends.push(friendName);
//   // }
//   // return newFriends;
// }

// const friendArr = ['Ryan', 'Kieran', 'Mark'];
// console.log(friend(friendArr));
