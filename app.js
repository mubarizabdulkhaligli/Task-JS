// TASK 1

function GetMin(arr) {
  if (!Array.isArray(arr)) {
    console.log("It is not array");
  } else {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    console.log(min);
  }
}
let x = 8;
let numbers = [5, 78, 9, -3, 0, 6, -88];
let min = GetMin(numbers);



// TASK 2

function FindRepeatingChar(str) {
  if (typeof str === "string") {
    let repeatingChars = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          if (!repeatingChars.includes(str[i])) {
            repeatingChars += str[i];
          }
        }
      }
    }
    if (repeatingChars.length > 0) {
      console.log(`Repeating letters: ${repeatingChars}`);
    } else {
      console.log("There is no repeating char.");
    }
  } else {
    console.log("Input is not a string.");
    
  }
}
let a = 5;
let b = "Hello";
let c = "World";
let d = FindRepeatingChar(b);



// TASK 3

function GetCountOfWords(sentence) {
  let newSnt = sentence.trim()
  if (typeof sentence === 'string' && newSnt!=='') {
    if(!newSnt.includes(' '))
    {
    console.log('There is 1 word in the sentence')
    }
    else if(newSnt.includes(' ')){
      let count = 1;
      for (let i = 0; i < newSnt.length; i++) {
        if (newSnt[i] === ' ' && newSnt[i+1]!== ' ') {
          count++;
        }
      }
      console.log(`There are ${count} words in the sentence `);
    }
  } else {
    console.log('It is not a sentence');
  }
}
GetCountOfWords('This is a sentence.');
GetCountOfWords('    ');
GetCountOfWords('. .   kk    .  l   ? ');



// TASK 4

function CheckPalindrome(str) {
  if (typeof str === 'string') {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    if (reversed === str) {
      alert('This is a palindrome.');
    } else {
      alert('This is not a palindrome.');
    }
  } else {
    console.log('This is not a string.');
  }
}

CheckPalindrome("kicik"); 


