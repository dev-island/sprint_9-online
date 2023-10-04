# Sprint 9 

## Leetcode Problem
 - TBD


## Topics
1. Factory Functions
2. Module Pattern
3. Classes
4. ES6 Modules

## Sub topics
1. IIFY
2. Closures
3. Intro to OOP (inheritance vs Composition)
4. Intro to bundlers


### IFFY
Immediately invoked function:
```
  (function() {
    // Runs immediately
  })()
```

### Closures
functions retain their scope even if they are passed around and called outside of that scope.

```
  const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3
```

## Project
1. Tik Tac Toe