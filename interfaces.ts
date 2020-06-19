export {};
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date("10-10-2000"),
  broken: true,
  summary() {
    return `name: ${this.name}\nyear: ${this.year}\nbroken: ${
      this.broken ? "yes" : "no"
    }`;
  },
};

const cocaCola = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary() {
    return `Description: ${this.color} ${
      this.carbonated ? "carbonated" : ""
    } drink with ${this.sugar}g of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(cocaCola);
