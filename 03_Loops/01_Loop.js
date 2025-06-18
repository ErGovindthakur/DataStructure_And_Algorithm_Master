// Exploring basics of loop in js

/*
Loop (Iterative statement) -: It is the process in process in programming language to do repeated task using a single statement called loop or iterative statement
*/

// Printing 3 times "Govind" 
// Here using three times console.log("Govind");
console.log("Govind");
console.log("Govind");
console.log("Govind");

// Basic loop structure
/*
for(start; condition(end); change(iteration,(increment, decrement))){
  code
}
*/
// printing three times "Govinda" using for loop

for(let i = 1; i<=3; i++){
     console.log("Govinda"); // here using one line (console.log("Govinda"))

     // TMC => O(n) and SPC => O(1)
}

// Note -: Loops play very important role in software application
// eg -: as we see a list of user profile in a single column (in whatsapp, instagram, web container)


// Print 1 to 22
for(let i = 1; i<=22; i++){
  console.log(i);
  // TMC => O(n) and SPC => O(1)
}
// Print 22 to 1
for(let i = 22; i>=1; i--){
  console.log(i);
   // TMC => O(n) and SPC => O(1)
}

// valid loop structure

/*
for(;;){
  // Here only semicolon matters in for loop 
  // it's a valid loop but runs infinite times
}
*/
