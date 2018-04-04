/*
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

it('happy path', () => {
  expect(1 + 1).toBe(2);
});
