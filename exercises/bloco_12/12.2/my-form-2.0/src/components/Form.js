import React from 'react';
import Fieldset from './Fieldset';

class Form extends React.Component {
  render() {
    return (
      <section className="container">
        <h1>Formulário</h1>
        <form>
          <Fieldset />
        </form>
      </section>
    );
  }
}

export default Form;