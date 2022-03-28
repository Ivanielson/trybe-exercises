const query = (element) => document.querySelector(element);

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = 'NEXT_COLOR';
const previousColor = 'PREVIOUS_COLOR';

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case nextColor:
      if (state.index < state.colors.length) {
        return {
          ...state,
          index: state.index + 1,
        }
      };
    case previousColor:
      if (state.index > 0) {
        return {
          ...state,
          index: state.index -1,
        }
      };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

query('#previous').addEventListener('click', () => {
  store.dispatch({ type: previousColor });
});

query('#next').addEventListener('click', () => {
  store.dispatch({ type: nextColor });
});

const color = query('#value');
store.subscribe(() => {
  const stateActual = store.getState();
  color.style['background'] = stateActual.colors[stateActual.index];
  color.innerHTML = stateActual.colors[stateActual.index];
});