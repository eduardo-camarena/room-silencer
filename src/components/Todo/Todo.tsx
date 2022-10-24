import { Component } from 'solid-js';

import { TodoElement } from './TodosWrapper';

const Todo: Component<TodoElement> = ({ title, info }) => {
  return (
    <div class="rounded-lg bg-gray-800">
      <p>{title}</p>
      <p>{info}</p>
    </div>
  );
};

export default Todo;
