// Exploring all the stuff about the promises

let myOrder = new Promise((res,rej) => {
     let isLogin = !true;

     if(isLogin){
          res("Welcome Back")
     }else{
          rej("You are unauthorized")
     }
})

// consuming the promises

myOrder.then((data)=>{
     console.log(data)
})
.catch((err)=>{
     console.log(err)
})
.finally(()=>{
     console.log("Finally got some responses")
})