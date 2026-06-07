let plusOne = (arr) => {
    if(arr.length==0)return "Not plus one possible";
    
    let i = arr.length-1;
    
    while(i>=0){
        
        if(arr[i]<9){
            arr[i]++;
            return arr;
        }
        
        arr[i] = 0;
        i--;
    }
    return [1,...arr];
}

console.log(plusOne([1,2,3]));
console.log(plusOne([9]));