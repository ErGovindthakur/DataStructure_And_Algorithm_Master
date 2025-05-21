// While loop => It is generally used when we don't know the exact times of code execution, otherwise it can be used like for loop

/*
for loop syntax
for(start; end; change){
// code
}
*/


/*
while loop syntax
start:
while(end){
// code
change;
}
*/

// Print the number until it is not equal to givenNum

// Note => In below code how many times our code is going to execute as well as what will be the givenNum, that's why i have used here while loop

let printNum = (givenNum) => {
     let num = 1;
     while(num <= givenNum){
          console.log(num);
          num++;
     }
};
printNum(9);