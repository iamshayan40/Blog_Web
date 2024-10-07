---
title: "JavaScript Tutorial In Urdu"
slug: "js-tutorial-in-urdu"
description: "JavaScript ek client-side language hai jo web pages ko interactive aur dynamic banati hai. Is blog mein, hum JavaScript ke basics aur asynchronous programming ko cover karenge. Ye tutorial aapko JavaScript use karne mein madad karega."
date: "9/09/2024"
author: "Muhammad Shayan"
image: "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png" 
---

JavaScript ek high-level programming language hai jo web development ke liye use hoti hai. Ye client-side scripting language hai jo web pages ko interactive aur dynamic banati hai. Is blog mein, hum JavaScript ke basics aur uske use ko discuss karenge.

## JavaScript Ki Basic Properties

1. **Variables**: JavaScript mein variables ko `var`, `let`, ya `const` keywords se declare kiya ja sakta hai.
   ```javascript
   let name = 'Ali'; // Variable name declare kiya
   const age = 25; // Constant value assign ki
   ```

2. **Functions**: Functions code blocks hote hain jo reusable operations ko perform karte hain.
   ```javascript
   function greet(name) {
     return `Hello, ${name}!`; // Greeting message return karte hain
   }
   ```

3. **Objects**: JavaScript objects key-value pairs ko represent karte hain.
   ```javascript
   let person = {
     name: 'Sara',
     age: 30,
     greet: function() {
       return `Hello, ${this.name}!`;
     }
   };
   ```

4. **Arrays**: Arrays ordered collections hote hain jo multiple values ko store karte hain.
   ```javascript
   let fruits = ['apple', 'banana', 'cherry']; // Fruits array
   ```

5. **Events**: JavaScript events web page interactions ko handle karte hain.
   ```javascript
   document.getElementById('myButton').addEventListener('click', function() {
     alert('Button clicked!');
   });
   ```

## JavaScript Functions

1. **Anonymous Functions**: Functions jo bina naam ke define kiye jaate hain.
   ```javascript
   let add = function(a, b) {
     return a + b;
   };
   ```

2. **Arrow Functions**: Shorter syntax ke sath function declarations.
   ```javascript
   const multiply = (a, b) => a * b;
   ```

## DOM Manipulation

JavaScript DOM (Document Object Model) ko manipulate karne ke liye use hoti hai, jisse aap HTML aur CSS elements ko dynamically change kar sakte hain.
   ```javascript
   document.getElementById('myDiv').innerHTML = 'New Content'; // Element ki content change karna
   ```

## Asynchronous JavaScript

1. **Promises**: Asynchronous operations handle karne ke liye.
   ```javascript
   let promise = new Promise((resolve, reject) => {
     // Some async operation
     resolve('Operation successful');
   });
   ```

2. **Async/Await**: Promises ko simplify karne ke liye.
   ```javascript
   async function fetchData() {
     let response = await fetch('url');
     let data = await response.json();
     console.log(data);
   }
   ```

### Conclusion

JavaScript web development ka ek important part hai jo interactive aur dynamic websites create karne mein madad karta hai. Is blog mein humne JavaScript ke basic concepts aur properties par nazar daali. Practice karte rahiye aur naye JavaScript features explore karte rahiye!

---