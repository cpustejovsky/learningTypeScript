import { MatchData } from "./MatchData";

import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {ConsoleReporter} from "./reportTargets/ConsoleReporter";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithConsoleReport(team: string){
    return new Summary(
      new WinsAnalysis(team),
      new ConsoleReporter()
    )
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    let output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}