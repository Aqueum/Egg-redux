import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// some methods of working with arrays without mutating them
// using Expect to confirm they work and deepFreeze to enforce immutability in test

const addCounter = list => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

const incrementCounter = (list, index) => {
  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  deepFreeze(listBefore);
  Expect(addCounter(listBefore)).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];
  deepFreeze(listBefore);
  Expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  deepFreeze(listBefore);
  Expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All array tests passed.');

// some methods of working with objects without mitation, and test methods

const toggleTodo = todo => {
  todo.completed = !todo.completed;
  return todo;
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };
  deepFreeze(todoBefore);
  Expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

testToggleTodo();
console.log('All object tests passed.');

// the app follows

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

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
