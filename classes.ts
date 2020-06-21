class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep!");
  }
}
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  startDriving(): void {
    this.drive();
  }
  carHonk(): void {
    this.honk();
  }
}

const car = new Car(4, "blue");
console.log(car.color);
console.log(car.wheels);
car.startDriving();
car.carHonk();
