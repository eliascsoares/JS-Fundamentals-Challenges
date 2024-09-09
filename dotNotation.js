console.log("Hello World")

console.log("hello".toUpperCase())

const grid = [
    [' ', '|', ' ', '|', ' '],
    ['-', '-', '-', '-', '-'],
    [' ', '|', ' ', '|', ' '],
    ['-', '-', '-', '-', '-'],
    [' ', '|', ' ', '|', ' ']
  ];

  function printGrid(grid) {
    for (let row of grid) {
      console.log(row.join(''));
    }
  }

  printGrid(grid);