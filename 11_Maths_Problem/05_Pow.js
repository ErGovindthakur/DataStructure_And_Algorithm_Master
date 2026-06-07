// solving the pow problem

let pow = (x,n) => {
     if(n==0) return 1;

     ans = pow(x,parseInt(n/2));

     if(n%2==0) return ans*ans;
     else return ans*ans*x;
}
console.log(pow(2,10));