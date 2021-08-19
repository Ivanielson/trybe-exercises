const generaionMapTechList = (tech, name) => {
  const obj = {
    tech: tech,
    name,
  }
  return obj;
}

const techList = (tech, name) => {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  const obj = [];
  tech.sort()
    .forEach((element) => obj.push(generaionMapTechList(element, name)));
  return obj;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;
