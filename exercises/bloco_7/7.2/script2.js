const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Função adiciona uma propriedade a um Objeto;
const setProperties = (obj, key, value) => obj[key] = value;
setProperties(lesson2, 'Turno', 'Manhã');
console.table(lesson2);

// Função lista todas as chaves de um Objeto;
const getKeysObject = (obj) => Object.keys(obj);
console.log(getKeysObject(lesson3));
