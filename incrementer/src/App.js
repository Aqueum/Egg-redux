/*

Not using app anymore, the example was always based on index...

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

const render = () => {
  ReactDOM.render(<Counter />, document.getElementById('root'));
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

class App extends Component {
  render() {
    return store.getState();
  }
}

export default App;
*/
