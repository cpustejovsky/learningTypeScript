interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  sort(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.sort(j, j + 1);
        }
      }
    }
  }
}