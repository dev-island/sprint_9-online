class Car {
  constructor(
    make,
    model,
    engine,
    driveTrain
  ) {
    this.model = model;
    this.make = make;
    this.engine = engine
    this.driveTrain = driveTrain
  }
}

class Truck extends Car {
  constructor(make, model, engine,  driveTrain, payload, towCapacity) {
    super(make, model, engine, driveTrain);
    this.payload = payload;
    this.towCapacity = towCapacity;
  }
}

const myTruck = new Truck('Ford', 'F150', 'V8', '4x4', 2000, 10000);
console.log(myTruck);

// VS Composition

class DriveTrain {
  constructor(type) {
    this.type = type
  }
}

class Transmission {
  constructor(type) {
    this.type = type
  }
}

class Engine {
  constructor(type) {
    this.type = type
  }
}
class ComposedCar {
  constructor(
    make,
    model,
    engine,
    driveTrain
  ) {
    this.model = model;
    this.make = make;
    this.engine = engine
    this.driveTrain = driveTrain
  }
}

const myComposedTruck = new ComposedCar('Ford', 'F150', new Engine('V8'), new DriveTrain('4x4'));
console.log('myComposedTruck', myComposedTruck);
