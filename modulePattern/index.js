const testModule = (function () {
  let counter = 0;

  incrementCounter = () => {
    return ++counter;
  }

  const getCount = () => {
    return counter;
  }

  resetCounter = () => {
    console.log("counter value prior to reset: " + counter);
    counter = 0;
  }

  return {
    incrementCounter,
    resetCounter,
    getCount,
    counter,
  };
})();

// Usage:
// Increment our counter
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
// Check the counter value and reset
// Outputs: 3
testModule.resetCounter();
console.log("Count after reset", testModule.getCount())
