let pascalTriangle = (numRows) => {
  let row = [1];
  let newRow = [];

  for (let i = 0; i < numRows; i++) {
    // print current row
//     console.log(row.join(" "));

    // debugging
    // console.log("Row -> ", row);

    newRow.push([...row]);

    // build next row from the end
    for (let j = row.length - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
    row.push(1); // add 1 at the end for next row
  }
  return newRow;
};

console.log(pascalTriangle(5));
