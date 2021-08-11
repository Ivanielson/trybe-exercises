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

// 2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// R: De forma assincrona, 1ª - A, 2ª - C e 3ª - B
console.log(planetDistanceFromSun(mars), '1ª - A'); // A
setTimeout(() => console.log(planetDistanceFromSun(venus), '3ª - B'), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter), '2ª - C'), 2000); // C