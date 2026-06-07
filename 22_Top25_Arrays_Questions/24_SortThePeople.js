let sortThePeople = (names,ages) => {

     if(!names || !ages || names.length !== ages.length )return `Enter people and their age correctly`;

     let combine = [];
     for(let i = 0; i<ages.length; i++){
          combine.push([ages[i],names[i]])
     }

     combine.sort((a,b)=>b[0]-a[0]);

     // for experiment purpose
     // for(let i = 0; i<ages.length; i++){
     //      console.log(combine[i][1]);
     // }


     return combine.map((val,idx)=>val[1]);

}
console.log(sortThePeople(["Mary","John","Emma"],[180,165,170]))