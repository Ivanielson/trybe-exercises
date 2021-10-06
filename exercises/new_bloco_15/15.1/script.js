const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);
