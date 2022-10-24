import { Component, For } from 'solid-js';
import { createStore } from 'solid-js/store';

import Todo from './Todo';

export interface TodoElement {
  title: string;
  info: string;
}

export const [todos, setTodos] = createStore([
  { title: 'hello', info: 'world' },
] as TodoElement[]);

const TodosWrapper: Component = () => {
  return (
    <div class="m-auto w-[300px] text-center pt-6">
      <For each={todos}>
        {(todo) => <Todo title={todo.title} info={todo.info} />}
      </For>
    </div>
  );
};

export default TodosWrapper;
