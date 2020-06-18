const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 6));

const logger = (message: string): void => {
  console.log(message);
};

const weatherToday = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date, weather: string}): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

logWeather(weatherToday)