import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    return (
      <section>
        <ul>
        <li>{ name }</li>
        <li>{ type }</li>
        <li>{ value }{ measurementUnit }</li>
      </ul>
      <img src={image} alt={`Imagem do ${name}`} />
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
      }),
      image: PropTypes.string,
    }),
  ).isRequired
}

export default Pokemon;