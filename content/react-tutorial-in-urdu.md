---
title: "React Tutorial In Urdu"
slug: "react-tutorial-in-urdu"
description: "React ek popular JavaScript library hai jisy user interface kelye use krte. Is blog mein, hum React ke basics, components, aur state management cover karenge. Ye tutorial aapko React ko effectively use karne mein help krega."
date: "9/09/2024"
author: "Muhammad Shayan"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCBxjO7bktm09kpP71A_nkD-bV23NJr2Nkw&s" 
---

**React Tutorial In Urdu**

React ek popular JavaScript library hai jo user interfaces banane ke liye use hoti hai. Facebook ne is library ko develop kiya hai, aur ye components-based architecture ko follow karti hai jo development ko modular aur maintainable banata hai. Is blog mein, hum React ke basics, components, aur state management ko cover karenge.

### React Ki Basic Properties

1. **Components**: React mein sab kuch components hota hai. Ye components re-usable code blocks hain jo UI elements ko represent karte hain.
   ```jsx
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
   ```

2. **JSX**: JSX ek syntax extension hai jo JavaScript code ko HTML jaise code ke sath likhne ki suvidha deta hai.
   ```jsx
   const element = <h1>Hello, world!</h1>;
   ```

3. **Props**: Props components ke beech data ko pass karne ke liye use hoti hain.
   ```jsx
   function Greeting(props) {
     return <p>Welcome, {props.name}!</p>;
   }
   ```

4. **State**: State component ke internal data ko manage karne ke liye use hoti hai, jo component ke re-rendering ko trigger karti hai.
   ```jsx
   class Counter extends React.Component {
     constructor(props) {
       super(props);
       this.state = { count: 0 };
     }

     render() {
       return (
         <div>
           <p>You clicked {this.state.count} times</p>
           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
             Click me
           </button>
         </div>
       );
     }
   }
   ```

### React Components

1. **Functional Components**: Ye simple functions hote hain jo props ko accept karte hain aur UI render karte hain.
   ```jsx
   function MyComponent() {
     return <div>My Component</div>;
   }
   ```

2. **Class Components**: Ye ES6 classes hain jo React.Component se extend hoti hain aur state aur lifecycle methods ko support karti hain.
   ```jsx
   class MyComponent extends React.Component {
     render() {
       return <div>My Component</div>;
     }
   }
   ```

### React Hooks

1. **useState**: Functional components mein state management ke liye use hota hai.
   ```jsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   ```

2. **useEffect**: Side effects ko manage karne ke liye use hota hai, jaise data fetching ya subscriptions.
   ```jsx
   import React, { useEffect, useState } from 'react';

   function DataFetcher() {
     const [data, setData] = useState(null);

     useEffect(() => {
       fetch('https://api.example.com/data')
         .then(response => response.json())
         .then(data => setData(data));
     }, []);

     return <div>{data ? <p>{data.message}</p> : 'Loading...'}</div>;
   }
   ```

### React Routing

React Router ek library hai jo client-side routing ke liye use hoti hai, jisse aap apni application mein different pages aur routes define kar sakte hain.
   ```jsx
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

   function App() {
     return (
       <Router>
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/about" component={About} />
         </Switch>
       </Router>
     );
   }
   ```

### Conclusion

React ek powerful library hai jo modern web development ko simplify karti hai. Is blog mein humne React ke basics, components, state management, aur routing ko cover kiya. Practice karte rahiye aur naye React features explore karte rahiye!

Agar aapko React ke baare mein aur jaanana hai, toh comments mein apne questions zaroor pochain.