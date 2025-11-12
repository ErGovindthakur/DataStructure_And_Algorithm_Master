let pascalTriangle = (numRows) => {
  let row = [1];

  for (let i = 0; i < numRows; i++) {
    // print current row
    console.log(row.join(" "));

    // build next row from the end
    for (let j = row.length - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
    row.push(1); // add 1 at the end for next row
  }
};

pascalTriangle(5);
