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

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*
*    Return a number denoting the rectangle's area.
**/
const getArea = (length, width) => length * width;

/**
*   Calculate the perimeter of a rectangle.
*
*    length: The length of the rectangle.
*   width: The width of the rectangle.
*
*    Return a number denoting the perimeter of a rectangle.
**/
const getPerimeter = (length, width) => 2 * (length + width);

