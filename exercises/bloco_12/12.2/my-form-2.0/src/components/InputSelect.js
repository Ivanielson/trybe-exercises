import React from 'react';
import States from '../../src/states';

class InputSelect extends React.Component {
  render() {
    const { name, description, id, value, handleChangeInput } = this.props;
    return (
      <div className="input-group m-2">
        <label htmlFor={id}>
          {description}
          <select name={name} id={id} value={value} onChange={handleChangeInput} className="form-select">
            <option value="">Selecione um Estado</option>
            {States.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)}
          </select>
        </label>
      </div>
    );
  }
}

export default InputSelect;