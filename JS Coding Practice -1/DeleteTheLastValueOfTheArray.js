"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let input = readLine().replace(/'/g, '"');
  // myArray
  let myArray = JSON.parse(input);

  /*
   * Write your code here and log the output.
   */
   let deleteValue = myArray.pop()
   console.log(deleteValue)
   console.log(myArray)
}
