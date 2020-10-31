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
  
const getMaxLessThanK = (n, k) => {
  let max = 0;

  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b <= n; b++) {
      let ab = a & b;

      if (ab < k && ab > max) {
        max = ab;
      }
    }
  }

  return max;
}
