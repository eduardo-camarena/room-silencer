import { Component, For } from 'solid-js';
import { createStore } from 'solid-js/store';

import Todo from './Todo';

const persistedState = (() => {
  const persistedState = localStorage.getItem('state');
  return persistedState
    ? (JSON.parse(persistedState) as { todos: TodoElement[] })
    : undefined;
})();

export interface TodoElement {
  title: string;
  description: string;
}

export const [state, setState] = createStore(
  persistedState ?? {
    todos: [] as TodoElement[],
  }
);

const TodosWrapper: Component = () => {
  return (
    <div class="py-6 pl-6 pr-4">
      <div class="flex flex-wrap gap-2 m-auto w-full text-center">
        <For each={state.todos}>
          {(todo, index) => (
            <Todo
              title={todo.title}
              description={todo.description}
              id={index}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default TodosWrapper;
