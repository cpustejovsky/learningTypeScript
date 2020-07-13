class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}
new ArrayOfNumbers(["a", "b", "c"]);
new ArrayOfNumbers([1, 2, 3, 4, 5]);
new ArrayOfAnything<string>(["a", "b", "c"]);

const arr = new ArrayOfAnything([1, 2, 3, 4, 5]);

// Example of generics with functions

function printAnything<T>(arr: T[]): void {
  arr.forEach((el) => console.log(el));
}

printAnything<number>([1, 2, 3, 4]);
printAnything(["a", "b", "c", "d"]); //hover over to see!

class House {
  print() {
    console.log("Yes, I am house.");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach((el) => el.print());
}
