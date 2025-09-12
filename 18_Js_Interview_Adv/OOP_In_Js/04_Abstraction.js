// Exploring Abstraction in js

// Abstraction => It means hiding the complex internal process from users which are actually not necessary for them , but providing a simplified interface to the task easily, weather that task quite difficult behind the scene


class coffeeMachine {

     start(){
          this.#heatWater();
          this.#brewCoffee();
          console.log("coffee done !")
     }

     #heatWater(){
          console.log("Water is heating...")
     }

     #brewCoffee(){
          console.log("Brewing the coffee...")
     }
}

// creating instance 

const coffee = new coffeeMachine();

coffee.start();