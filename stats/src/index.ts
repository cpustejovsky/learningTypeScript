import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

let reader = new MatchReader("football.csv");
reader.read();
let football = reader.data;

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
