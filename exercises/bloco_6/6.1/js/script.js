const selectEstado = document.querySelector('#select-estado');
const inputDate = document.querySelector('#input-date-start');
const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const siglas = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let index = 0; index < estados.length; index += 1) {
  const newOption = document.createElement('option');
  newOption.setAttribute('value', siglas[index]);
  newOption.innerText = estados[index];
  selectEstado.appendChild(newOption);
}

function verificaData() {
  const dateFormat = /^[0-9]{2}\/^[0-9]{2\/[0-9]{4}$/;
  if (!dateFormat.test(inputDate.value)) {
    alert('Preencher data no formato dd/mm/aaaa');
  }
}
