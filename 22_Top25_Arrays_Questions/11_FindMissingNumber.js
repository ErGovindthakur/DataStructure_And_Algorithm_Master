let findMissingNumber = (arr) => {
  let n = arr.length;

  if (n == 0) return 0;
  if (n == 1) return arr[0] == 0 ? 1 : 0;

//   let actualSum = 0;
//   let arrSum = 0;

 let  arrSum = arr.reduce((acc, val) => acc + val, 0);
  //   console.log(arrSum);

  //   for (let i = 0; i <= n; i++) {
  //     actualSum += i;
  //   }
  //   console.log(actualSum);

  // formula based sum
  let actualSum = Math.floor((n * (n + 1)) / 2);

  return actualSum - arrSum;
};
console.log(findMissingNumber([0, 1, 2, 4]));
