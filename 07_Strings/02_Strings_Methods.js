// 1. length
const name = "Govind";
console.log(name.length); // 6

// 2. charAt()
console.log(name.charAt(0)); // 'G'

// 3. slice()
console.log(name.slice(0, 3)); // 'Gov'
console.log(name.slice(-3)); // 'ind'

// 4. substring()
console.log(name.substring(1, 4)); // 'ovi'

// 5. substr() – deprecated but still works
console.log(name.substr(1, 3)); // 'ovi'

// 6. toUpperCase()
console.log(name.toUpperCase()); // 'GOVIND'

// 7. toLowerCase()
console.log(name.toLowerCase()); // 'govind'

// 8. trim()
const messy = "   Hello Govind   ";
console.log(messy.trim()); // 'Hello Govind'

// 9. trimStart()
console.log(messy.trimStart()); // 'Hello Govind   '

// 10. trimEnd()
console.log(messy.trimEnd()); // '   Hello Govind'

// 11. includes()
console.log(name.includes("vin")); // true

// 12. startsWith()
console.log(name.startsWith("Go")); // true

// 13. endsWith()
console.log(name.endsWith("ind")); // true

// 14. indexOf()
console.log(name.indexOf("v")); // 2

// 15. lastIndexOf()
const fruit = "banana";
console.log(fruit.lastIndexOf("a")); // 5

// 16. replace()
const greeting = "Hello world";
console.log(greeting.replace("world", "Govind")); // 'Hello Govind'

// 17. replaceAll()
const repeatStr = "apple apple apple";
console.log(repeatStr.replaceAll("apple", "banana")); // 'banana banana banana'

// 18. split()
const skills = "JS,React,Node";
console.log(skills.split(",")); // ['JS', 'React', 'Node']

// 19. repeat()
console.log("Na ".repeat(3)); // 'Na Na Na '

// 20. concat()
const first = "Hello";
const second = "World";
console.log(first.concat(" ", second)); // 'Hello World'

// 21. match() – using RegEx
const matchTest = "abc123";
console.log(matchTest.match(/\d+/)); // ['123']

// 22. padStart()
const num = "7";
console.log(num.padStart(3, "0")); // '007'

// 23. padEnd()
console.log(num.padEnd(4, "*")); // '7***'

// 24. toString()
const number = 123;
console.log(number.toString()); // '123'

// 25. valueOf()
const strObj = new String("Govind");
console.log(strObj.valueOf()); // 'Govind'

// 26. localeCompare()
console.log("a".localeCompare("b")); // -1 (a comes before b)
console.log("b".localeCompare("a")); // 1

// 27. normalize()
const accented = "é";
const combined = "e\u0301"; // e + accent
console.log(accented === combined); // false
console.log(accented.normalize() === combined.normalize()); // true
