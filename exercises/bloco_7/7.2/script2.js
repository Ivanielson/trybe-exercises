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
console.log(getKeysObject(lesson1));


// Função para verificar tamanho de um Objeto;
const getSizeObject = (obj) => Object.entries(obj).length;
console.log(getSizeObject(lesson2));

// Função lista todos os valores de Objeto;
const getValuesObject = (obj) => Object.values(obj);
console.log(getValuesObject(lesson3));

// Criando um novo Objeto com os já existentes;
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);
