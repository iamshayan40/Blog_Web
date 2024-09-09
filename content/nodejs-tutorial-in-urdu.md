---
title: "Node JS Tutorial In Urdu "
slug: "nodejs-tutorial-in-urdu"
description: "Node.js ek JavaScript runtime environment hai jo server-side applications ke liye use hota hai. Ye fast aur scalable hai, aur asynchronous programming ko support karta hai. Is blog mein, hum Node.js ke basics aur use cases ko explore karenge."
date: "2023-10-02"
author: "Muhammad Shayan"
image: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
---

# Introduction

# Node.js

Mujhe recently Node.js pe kaam karne ka mauka mila aur mujhe iske saath kaam karke kaafi acha experience mila. Is blog post mein, main apne Node.js ke tajurbaat aur iske advantages ko share karunga.

## Node.js Kya Hai?

Node.js ek open-source JavaScript runtime environment hai jo aapko server-side applications develop karne ki suvidha deta hai. Yeh event-driven aur non-blocking I/O model use karta hai, jo ise high-performance banata hai.

## Main Advantages

1. **Asynchronous I/O**: Node.js ka asynchronous I/O model aapke applications ko high scalability aur performance provide karta hai.
   
2. **Single Programming Language**: Node.js ke saath aap client-side aur server-side dono ke liye JavaScript use kar sakte hain, jo development ko aasan aur efficient banata hai.

3. **NPM (Node Package Manager)**: Node.js ke saath aapko NPM milta hai, jo ek vast repository of packages provide karta hai. Yeh packages aapko apne projects mein asani se integrate karne ki suvidha dete hain.

## Getting Started with Node.js

1. **Installation**: Node.js ko install karne ke liye, aap Node.js ki official website se installer download kar sakte hain.

2. **Creating a Simple Server**:

   ```javascript
   const http = require('http');

   const hostname = '127.0.0.1';
   const port = 3000;

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello World\n');
   });

   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

3. **Using NPM**: Aap NPM ke commands ka use karke packages install kar sakte hain aur manage kar sakte hain.

## Conclusion

Node.js ke saath kaam karke mujhe kaafi acha experience mila aur main future mein bhi iske advanced features ko explore karne ke liye excited hoon. Aap bhi Node.js ko try karein aur dekhain ke yeh aapke projects ke liye kaise useful ho sakta hai.

![Node.js](https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
```

### Explanation:

- **Frontmatter**: Title, slug, description, date, author, and image URL are specified.
- **Content**: Introduction to Node.js, its advantages, a simple server example, and a conclusion in Roman Urdu.

Aap is content ko `content/second-blog.md` file mein save kar sakte hain. Yeh aapke blog page par correct rendering hona chahiye.