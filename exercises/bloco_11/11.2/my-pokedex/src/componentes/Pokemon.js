import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = this.props.pokemon;
    return (
      <div className='col-4'>
        <div className='card p-2 mb-4 shadow' Style='width: 16rem;'>
        <img src={image} alt={`Imagem do ${name}`} className='card-img-top bg-warning bg-gradient bg-opacity-50' />
        <div className='card-body'>
          <p className='card-text fs-5'>Name: { name }</p>
          <p className='card-text fs-5'>Type: { type }</p>
          <p className='card-text fs-5'>Average Weight: { value }{ measurementUnit }</p>
          <a target='_blank' rel="noreferrer" href={ moreInfo } className='btn btn-warning'> Descrição </a>
        </div>
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