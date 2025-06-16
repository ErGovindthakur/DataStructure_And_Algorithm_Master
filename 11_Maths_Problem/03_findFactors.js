// Find all the factors

let n = 30;

for(let i = 1; i<=Math.floor(n/2); i++){
     if(n%i === 0){
          console.log(i);
     }
}