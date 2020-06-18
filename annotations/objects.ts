export {};

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  age,
  name,
  coords: { lat, long },
}: {
  age: number;
  name: string;
  coords: { lat: number; long: number };
} = profile;
// const { coords: { lat, long}}: {coords: {lat: number, long: number}} = profile;
