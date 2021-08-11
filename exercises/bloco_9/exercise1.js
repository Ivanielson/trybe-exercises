const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// R: De forma sincrona, na ordem em que foi chamado os console.log()

console.log(planetDistanceFromSun(mars), 'A - 1ª'); // A - 1ª
console.log(planetDistanceFromSun(venus), 'B - 2ª'); // B - 2ª
console.log(planetDistanceFromSun(jupiter), 'C - 3ª'); // C - 3ª