// Exploring break and continue statement in loop

// break =>  statement break the flow of code(loop) if condition matched
for(let i = 1; i<=22; i++){
     if(i === 12) break;
     console.log(i);
}

// continue => Statement continue the flow of code(loop) but skip the particular task and remaining continues
for(let i = 1; i<=6; i++){
     if(i===4) continue;
     console.log(i);
}