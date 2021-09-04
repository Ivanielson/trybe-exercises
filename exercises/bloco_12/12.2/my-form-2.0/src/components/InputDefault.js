import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class InputDefault extends React.Component {
  render() {
    const { name, description, id, value, type, handleChangeInput } = this.props;
    return (
      <div className="input-group m-2">
        <label className="form-label" htmlFor={id}>
          {description}
          <input className="form-control" name={name} id={id} value={value} type={type} onChange={handleChangeInput} />
        </label>
      </div>
    );
  }
}

export default InputDefault;