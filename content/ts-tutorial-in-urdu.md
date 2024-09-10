---
title: "TypeScript Tutorial In Urdu"
slug: "ts-tutorial-in-urdu"
description: "TypeScript ek JavaScript-based language hai jo strong type checking aur better debugging tools provide karti hai. Ye code ko JavaScript mein convert karta hai. Is blog mein, hum TypeScript ke basics aur use ko discuss karenge."
date: "9/09/2024"
author: "Muhammad Shayan"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gllMAZ8aQvnxnCey8rE1512fQmZs8ijI8A&s"  # Add a valid image URL here
---

TypeScript ek superset hai JavaScript ka jo additional features provide karta hai, jese ke static types aur object-oriented programming ke tools. Agar aap already JavaScript samajhte hain, to TypeScript seekhna aap ke liye kaafi asaan hoga. Is tutorial mein hum TypeScript ke advanced concepts seekhne walay hain, aur sath hi real-world projects pe kaam karenge.

Agar aap web development ya software engineering mein apna career banana chahte hain, to TypeScript ka skill aap ko JavaScript se advanced aur productive banane mein madad karega.

## TypeScript Kya Hai?

TypeScript ek strongly-typed programming language hai jo JavaScript ko extend karti hai. Ye type-checking aur code validation tools ko JavaScript ke sath merge karke coding experience ko zyada reliable aur error-free banata hai. Yeh Microsoft ki taraf se develop ki gayi hai aur aaj kal duniya bhar ke developers TypeScript ko apni JavaScript applications mein use karte hain.

## TypeScript Ka Faiyda Kya Hai?

- **Static Typing**: TypeScript mein aap pehle se define kar sakte hain ke kisi variable ya function ka return type kya hoga. Is se aap ke code mein bugs kam hote hain aur code zyada maintainable hota hai.
- **Code Completion & Error Detection**: TypeScript aapke IDE mein auto-completion aur error detection tools ka integration karta hai, jise coding fast aur error-free hoti hai.
- **OOP Features**: TypeScript object-oriented programming concepts jaise inheritance, interfaces, aur classes ko support karta hai, jo ke modern application development ke liye kaafi important hain.
- **Compatibility with JavaScript**: TypeScript ko JavaScript ke upar banaya gaya hai, matlab ke jo code aap TypeScript mein likhte hain, wo automatically JavaScript mein convert ho jata hai.

## TypeScript Ka Installation

Agar aap TypeScript ko apne project mein install karna chahte hain, to aapko sabse pehle Node.js install karna padega. Uske baad aap simple command line se TypeScript install kar sakte hain:

```bash
npm install -g typescript
```

Is command ke baad, aap apne computer pe TypeScript ke tools ko use karne ke liye tayar hain. Aap kisi bhi `.ts` file ko compile kar sakte hain `tsc` command ke zariye.

## TypeScript Basics

## Variables aur Types

TypeScript mein variables ko define karte waqt aap type specify kar sakte hain:

```typescript
let age: number = 25;
let name: string = "Shayan";
let isActive: boolean = true;
```

## Functions

TypeScript mein aap function ka return type bhi define kar sakte hain. Agar aapko pata hai ke ek function hamesha `number` return karega, to aap aise define karenge:

```typescript
function multiply(x: number, y: number): number {
    return x * y;
}
```

## Interfaces

Interfaces aapke objects ke structure ko define karne ka tareeqa hain:

```typescript
interface Person {
    name: string;
    age: number;
    email?: string;  // Optional property
}

let user: Person = {
    name: "Ahmed",
    age: 30,
};
```

## TypeScript Projects

Aap TypeScript ko real-world projects mein kaise use kar sakte hain, is section mein hum kuch projects discuss karenge.

## Project 1: Simple To-Do List Application

Is project mein hum ek simple to-do list application banayenge jisme user apne tasks ko add, update, aur delete kar sakta hai.

## Steps:
1. TypeScript environment setup karna.
2. To-Do items ka interface define karna.
3. Functions ka use kar ke add, edit, aur delete functionalities implement karna.

```typescript
interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

let todos: Todo[] = [];

function addTask(task: string): void {
    const newTodo: Todo = {
        id: todos.length + 1,
        task,
        completed: false,
    };
    todos.push(newTodo);
}
```

## Project 2: E-commerce Product Page

Is project mein hum ek product page banayenge jisme aap product ki detail show karenge aur product ko cart mein add karne ki functionality provide karenge.

## Steps:
1. Products ka interface create karna.
2. Products ko list karna aur cart functionality implement karna.

```typescript
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

let products: Product[] = [
    { id: 1, name: "Laptop", price: 1000, inStock: true },
    { id: 2, name: "Phone", price: 500, inStock: false },
];

function addToCart(product: Product): string {
    if (!product.inStock) {
        return `${product.name} is out of stock`;
    }
    return `${product.name} has been added to the cart`;
}
```

## Conclusion

TypeScript seekhna aapko modern JavaScript applications develop karne mein madad karega aur aapke career mein ek naya dimension add karega. Agar aapko TypeScript ke concepts clear ho gaye hain to ab aap projects bana kar apne skills ko aur improve kar sakte hain. Is tutorial ke zariye humne kuch important concepts aur examples ko discuss kiya hai jo ke TypeScript mein commonly use hote hain.

Is tutorial ko follow karne ke baad aap TypeScript ko confidently apne projects mein use kar payenge. Agar aapko koi confusion ho, to comment section mein zaroor poochein. Happy coding!