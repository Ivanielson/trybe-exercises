import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section className='row'>
        { pokemons.map((element) => <Pokemon key={ element.id } pokemon={ element } />)}
      </section>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(
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

export default Pokedex;