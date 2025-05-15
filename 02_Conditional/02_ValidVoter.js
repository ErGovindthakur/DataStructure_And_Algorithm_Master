// Write a program to check if the voter can vote or not with complete edge cases

let voterAge = 19;
// let voterAge = Number(prompt("Enter you age."));
if(isNaN(voterAge)){
     console.log("Please enter a valid Age")
}else if(voterAge>=18){
     console.log("You can vote")
}else{
     console.log("You can't vote")
}