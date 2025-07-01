// finding lcm using gcd

let findGcd = (a,b) => {
     if(b==0)return a;

     return findGcd(b,a%b);
}


// finding lcm using gcd

let findLcm = (a,b) => {
     return (a*b) / findGcd(a,b)
}

console.log(findLcm(24,32))

// TMC => O(log min(a,b))