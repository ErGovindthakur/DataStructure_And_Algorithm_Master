// Exploring the concept of debouncing in js

// Debouncing => It means "grouping a series of rapid calls into one" by delaying execution until a certain time has passed without another call.

// Used In => Search bar suggestion, form validation.


let debounce = (func,delay) => {
     let timer;

     return (...args) => {
          clearTimeout(timer);

          timer = setTimeout(()=>{
               func.apply(this,args)
          },delay)
     }
}

let searchQuery = (query) => {
     console.log("Searching for -: ", query)
};

let debouncedQuery = debounce(searchQuery,5000);

debouncedQuery("Aj");
debouncedQuery('Aja');
debouncedQuery('Ajay');