import { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <header class="py-3 flex bg-indigo-800">
      <div class="flex-1 text-center">To do app</div>
      <div
        class="pr-5 z-30"
        onClick={() => {
          console.log('hello');
        }}
      >
        +
      </div>
    </header>
  );
};

export default Header;
