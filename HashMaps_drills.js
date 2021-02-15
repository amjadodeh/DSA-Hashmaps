// Create a .js file called HashMaps_drills.
// In the file import the HashMap module.
// Create a function called main()

const HashMap = require('./hashMap');

// Inside your main() function, create a hash map called lotr.
function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandolf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  console.log(lotr);
  console.log('Maiar key:', lotr.get('Maiar'));
  console.log('Hobbit key:', lotr.get('Hobbit'));

  return lotr;
}

main();

// Print your hash map and notice the length and items that are hashed in your hash map.
// Have you hashed all the items you were asked to?
//
//  No, some items are missing in the hashed table

// What is the capacity of your hash table after you have hashed all the above items?
// Explain your answer.
//
//  This hash table returned "_capacity: 24". This is not the initial capacity of
//  every hash table. The capacity depends on the values set.

// 2. WhatDoesThisDo
const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);
  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// This function outputs 20 then 10.

// 4. Remove duplicates
function removeDuplicates(str) {
  let letters = [];
  for (let i = 0; i < str.length; i++) {
    if (!letters.includes(str[i])) letters.push(str[i]);
  }
  return letters.join('');
}

console.log(removeDuplicates('google'));

// 5. Any permutation a palindrome
const permutation = (str) => {
  const palindromeMap = new Map();
  let odd = 0;
  for (let i = 0; i < str.length; i++) {
    if (palindromeMap.get(str[i]) === undefined) {
      palindromeMap.set(str[i], 1);
    } else {
      let char = palindromeMap.get(str[i]);
      palindromeMap.set(str[i], (char += 1));
    }
  }
  for (let i = 0; i < palindromeMap.size; i++) {
    if (palindromeMap.get(str[i]) % 2 !== 0) {
      odd++;
    }
    if (odd > 1) {
      return false;
    }
  }
  return true;
};

console.log(permutation('racecar'));
console.log(permutation('acecarr'));
console.log(permutation('north'));

// 6. Anagram grouping
const anagramGrouping = (strArr) => {
  const anagramMap = new Map();
  strArr.forEach((word) => {
    let sorted = word.split('').sort().join('');
    if (anagramMap.has(sorted)) {
      anagramMap.get(sorted).push(word);
    } else {
      anagramMap.set(sorted, [word]);
    }
  });
  return [...anagramMap.values()];
};

console.log(
  anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])
);
