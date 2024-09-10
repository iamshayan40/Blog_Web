---
title: "CSS Tutorial In Urdu"
slug: "css-tutorial-in-urdu"
description: "CSS ek style sheet language hai jo HTML documents ko style aur format karti hai. Ye web pages ke visual presentation ko control karti hai. Is blog mein, hum CSS ke basics aur use ko discuss karenge."
date: "9/09/2024"
author: "Muhammad Shayan"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdDy1MPyAklifM98twCxSuRj7EVJPO0cmHg&s" 
---


CSS (Cascading Style Sheets) ek style sheet language hai jo HTML documents ko style aur format karti hai. CSS web pages ki visual presentation ko control karti hai, jisse aap apni website ko attractive aur user-friendly bana sakte hain. Is blog mein, hum CSS ke basics aur uske use ko discuss karenge.

## CSS Ki Basic Properties

1. **Color**: CSS ke zariye aap text aur background colors set kar sakte hain.
   ```css
   p {
     color: blue; /* Text ka color blue hoga */
     background-color: lightgray; /* Background color light gray hoga */
   }
   ```

2. **Font Size**: Text ka size adjust karne ke liye `font-size` property use hoti hai.
   ```css
   h1 {
     font-size: 24px; /* Heading ka size 24 pixels hoga */
   }
   ```

3. **Margin aur Padding**: Elements ke beech spacing adjust karne ke liye `margin` aur `padding` properties use hoti hain.
   ```css
   .box {
     margin: 20px; /* Box ke 20 pixels ke margin */
     padding: 15px; /* Box ke 15 pixels ka padding */
   }
   ```

4. **Border**: Border add karne ke liye `border` property use hoti hai.
   ```css
   .bordered {
     border: 2px solid black; /* Black color ka 2 pixels wide border */
   }
   ```

5. **Background**: Background ko style karne ke liye `background` properties use hoti hain.
   ```css
   .background {
     background-color: #f0f0f0; /* Light gray background */
     background-image: url('background.jpg'); /* Background image */
     background-size: cover; /* Image ko container ke size ke mutabiq adjust kare */
   }
   ```

## CSS Layout Techniques

1. **Flexbox**: Flexbox ek powerful layout tool hai jo elements ko align aur distribute karne mein madad karta hai.
   ```css
   .container {
     display: flex;
     justify-content: space-between; /* Elements ke beech space ko distribute kare */
   }
   ```

2. **Grid**: CSS Grid layout ek two-dimensional layout system hai jo rows aur columns ko define karta hai.
   ```css
   .grid-container {
     display: grid;
     grid-template-columns: repeat(3, 1fr); /* 3 equal columns banaye */
     gap: 10px; /* Grid items ke beech 10 pixels ka gap */
   }
   ```

3. **Positioning**: CSS positioning properties elements ko specific location par place karne mein madad karti hain.
   ```css
   .absolute {
     position: absolute;
     top: 10px;
     left: 20px;
   }
   ```

## Responsive Design

Responsive design ensure karta hai ke aapki website har device par achi dikhe. Media queries ka use karke aap different screen sizes ke liye styles define kar sakte hain.
   ```css
   @media (max-width: 768px) {
     .container {
       flex-direction: column; /* Small screens ke liye column layout */
     }
   }
   ```

## Conclusion

CSS ek essential tool hai jo web design ko enhance karta hai. Is blog mein humne CSS ke basic concepts aur properties par nazar daali. Aap in properties aur techniques ko use karke apni websites ko stylish aur functional bana sakte hain. Practice karte rahiye aur naye CSS features explore karte rahiye!

Agar aapko CSS ke baare mein aur jaanana hai, toh comments mein apne questions zaroor pochain.
