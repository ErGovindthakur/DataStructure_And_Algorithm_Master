// Exploring promises via async and await

let isValidNum = new Promise((res,rej)=> {

     let num = Math.floor((Math.random()*10)+1);
     

     if(num > 5){
          res("Got a valid num...")
     }else{
          rej("Got num less than five...")
     }
})

// creating an async function to get the promise data

let asyncFunc = async() => {
     console.log("Data is loading...")
     try{
          let data = await isValidNum;
          console.log(data)
     }catch(err){
          console.log(err)
     }
}
asyncFunc();