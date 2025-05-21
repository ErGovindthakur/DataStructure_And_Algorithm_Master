// Find the reverse of given number

// eg -: 123(givenNum) <=> 321(revNum)

let reverseNum = (givenNum) => {
     givenNum = Number(givenNum);
     let revNum = 0;
     if(givenNum<0 || isNaN(givenNum)) return "Enter a valid num must be greater than zero";

     while(givenNum > 0){
          let rem = givenNum%10;
          revNum = (revNum*10)+rem;
          givenNum = Math.floor(givenNum/10);
     }
     return revNum;
}

console.log(reverseNum("123"));
