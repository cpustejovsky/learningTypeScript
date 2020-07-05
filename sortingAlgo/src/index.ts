import {Sorter} from "./Sorter"
import {NumbersCollection} from "./NumberCollection"
import {CharactersCollection} from "./ChractersCollection"

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numbersCollection)
numSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("AZbdc");
const charSorter = new Sorter(charactersCollection)
charSorter.sort();
console.log(charactersCollection.data);
