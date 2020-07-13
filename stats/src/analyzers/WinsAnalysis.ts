import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

enum Header {
  Date,
  HomeTeam,
  AwayTeam,
  HomeTeamScore,
  AwayTeamScore,
  Winner,
  Name,
}

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matches: MatchData[]): string {
    let winsArray = matches.filter(
      (row) =>
        (row[Header.HomeTeam] === this.teamName &&
          row[Header.Winner] === MatchResult.HomeWin) ||
        (row[Header.AwayTeam] === this.teamName &&
          row[Header.Winner] === MatchResult.AwayWin)
    );
    return `${this.teamName} won ${winsArray.length} games.`
  }
}
