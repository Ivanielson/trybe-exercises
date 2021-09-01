import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = this.props.pokemon;
    return (
      <div className='card m-3 mb-4 shadow rounded' Style='width: 14rem;'>
        <img src={image} alt={`Imagem do ${name}`} className='card-img-top' />
        <div className='card-body'>
          <p className='card-text'>{ name }</p>
          <p className='card-text'>{ type }</p>
          <p className='card-text'>Average Weight: { value }{ measurementUnit }</p>
          <a target='_blank' rel="noreferrer" href={ moreInfo } className='btn btn-primary'> Descrição </a>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired
}

export default Pokemon;