import { MatchReader } from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader"
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader('football.csv');

const reader = new MatchReader(csvFileReader);
reader.load();

let football = reader.matches;
console.log(football)
enum Header {
  Date,
  HomeTeam,
  AwayTeam,
  HomeTeamScore,
  AwayTeamScore,
  Winner,
  Name,
}

let manUnitedWins = football.filter(
  (row) =>
    (row[Header.HomeTeam] === "Man United" &&
      row[Header.Winner] === MatchResult.HomeWin) ||
    (row[Header.AwayTeam] === "Man United" &&
      row[Header.Winner] === MatchResult.AwayWin)
);

console.log(football.length);
console.log(manUnitedWins.length);
