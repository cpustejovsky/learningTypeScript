const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};

logNumber(5);


const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);