// Move all zero in left side from given binary array below

let binArray = [0,1,0,0,1,1,0,1];

let i = j = 0;

while(i<binArray.length){
     if(binArray[i]==0){
          // simple swapping logic
          let temp = binArray[i];
          binArray[i] = binArray[j];
          binArray[j] = temp;
          j++;
     }
     i++;
};

console.log(binArray);