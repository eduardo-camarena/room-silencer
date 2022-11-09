import { Component } from 'solid-js';

import { setState, state } from '../Todo/TodosWrapper';

const Header: Component = () => {
  return (
    <header class="py-3 flex bg-indigo-800">
      <div class="flex-1 text-center">To do app</div>
      <div
        class="pr-5 z-30"
        onClick={() => {
          setState('todos', [
            ...state.todos,
            { title: 'hello', description: 'world' },
          ]);
          localStorage.setItem('state', JSON.stringify(state));
        }}
      >
        +
      </div>
    </header>
  );
};

export default Header;
