// const query = (element) => document.querySelector(element);

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = 'NEXT_COLOR';
const previousColor = 'PREVIOUS_COLOR';

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case nextColor:
      if (state.index < state.colors.length) return state.index + 1;
    case previousColor:
      if (state.index > 0) return state.index -1;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);
