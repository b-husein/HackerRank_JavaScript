'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

const vowelsAndConsonants = (s) => {
  const vowelTest = (letter) => 'aeiou'.includes(letter);
  const arr = s.split('');

  arr.forEach((letter) => {
    if (vowelTest(letter)) {
      console.log(letter);
    }
  });

  arr.forEach((letter) => {
    if (!vowelTest(letter)) {
      console.log(letter);
    }
  });
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}