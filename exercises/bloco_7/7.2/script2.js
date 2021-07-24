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

// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
// Função retorne o número total de estudantes em todas as aulas;
const numberStudents = (obj) => {
  const getProperties = Object.getOwnPropertyDescriptors(obj);
  const lesson1 = getProperties.lesson1.value.numeroEstudantes;
  const lesson2 = getProperties.lesson2.value.numeroEstudantes;
  const lesson3 = getProperties.lesson3.value.numeroEstudantes;
  const numberStudents = lesson1 + lesson2 + lesson3;
  return numberStudents;
}

console.log(numberStudents(allLessons));

// Função retorna valor de acordo com a posição do Objeto passada no parametro;
const getValuePosition = (obj, num) => Object.values(obj)[num];
console.log(getValuePosition(lesson1, 0));

// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
// Função verifica se existe uma chave e valor no Objeto;
const validationKeyValue = (obj, key, value) => {
  const chave = obj.hasOwnProperty(key);
  const valor = obj[key];
  if (chave && valor === value) {
    return true;
  }
  return false;
}

console.log(validationKeyValue(lesson2, 'professor', 'Carlos'));
