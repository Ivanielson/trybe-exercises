import React from 'react';
import InputDefault from './InputDefault';
import InputSelect from './InputSelect';

class Fieldset extends React.Component {
  constructor() {
    super();

    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: false,
    }
  }

  handleChangeInput ({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <fieldset className="input-group m-3">
        <legend>Dados Pessoais</legend>
        {/* Input Name */}
        <InputDefault
          description="Nome: " 
          name="nome" id="name" 
          value={this.state.nome} 
          handleChangeInput={this.handleChangeInput} 
          type="text"
        />
        {/* Input E-mail */}
        <InputDefault
          description="E-mail: " 
          name="email" id="email" 
          value={this.state.email} 
          handleChangeInput={this.handleChangeInput} 
          type="text"
        />
        {/* Input CPF */}
        <InputDefault
          description="CPF: " 
          name="cpf" id="cpf" 
          value={this.state.cpf} 
          handleChangeInput={this.handleChangeInput} 
          type="text"
        />
        {/* Input Endereço */}
        <InputDefault
          description="Endereço: " 
          name="endereco" id="endereco" 
          value={this.state.endereco} 
          handleChangeInput={this.handleChangeInput} 
          type="text"
        />
        {/* Input Cidade */}
        <InputDefault
          description="Cidade: " 
          name="cidade" id="cidade" 
          value={this.state.cidade} 
          handleChangeInput={this.handleChangeInput} 
          type="text"
        />
        {/* Input Estado */}
        <InputSelect
          description="Estado: "
          name="estado"
          id="estado"
          value={this.state.estado}
          handleChangeInput={this.handleChangeInput}
        />
      </fieldset>
    );
  }
}

export default Fieldset;