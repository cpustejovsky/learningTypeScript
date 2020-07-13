let weekday: number[] = [1, 2, 3, 4, 5];
function spendProductiveTime(workHours: number): void {
  let contEduHrs: number;
  weekday.indexOf(new Date().getDay()) !== -1
    ? (contEduHrs = 9 - workHours)
    : (contEduHrs = 2);
  console.log(`You should spend ${contEduHrs} hours on continuing education.`);
}

spendProductiveTime(4);
