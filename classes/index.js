class Car {
  isRunning = false;

  startEngine() {
    this.isRunning = true;
  }

  stopEngine() {
    this.isRunning = false;
  }

  getIsRunning() {
    return `The car is running: ${this.isRunning}`;
  }
}

const myTruck = new Car();
console.log(myTruck.getIsRunning());
myTruck.startEngine();
console.log(myTruck.getIsRunning());