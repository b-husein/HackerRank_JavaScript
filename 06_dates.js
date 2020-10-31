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

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
const getDayName = (dateString) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = new Date(dateString).getDay();

  return days[day];
}

