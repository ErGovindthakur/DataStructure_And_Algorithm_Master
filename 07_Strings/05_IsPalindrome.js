// check if the given string is palindrome or not

let palindromeCheck = (str) => {
     str = str.toUpperCase();

     let i = 0;
     let j = str.length - 1;


     while(i<j){
          if(str.charAt(i) != str.charAt(j)){
               return false;
          }
          i++;
          j--;
     }
     return true;
}

console.log(palindromeCheck("Madam"));