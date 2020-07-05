import {Sorter} from "./Sorter"
import {NumbersCollection} from "./NumberCollection"
import {CharactersCollection} from "./ChractersCollection"
import {LinkedList} from "./LinkedList"
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numbersCollection)
numSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("AZbdc");
const charSorter = new Sorter(charactersCollection)
charSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(250);
linkedList.add(10);
linkedList.add(800);
linkedList.add(42);
linkedList.add(5);

const listSorter = new Sorter(linkedList)
listSorter.sort()
linkedList.print()