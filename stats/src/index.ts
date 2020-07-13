import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const reader = MatchReader.fromCsv("football.csv")
reader.load();
let summary = Summary.winsAnalysisWithConsoleReport("Man United");
summary.buildAndPrintReport(reader.matches);
