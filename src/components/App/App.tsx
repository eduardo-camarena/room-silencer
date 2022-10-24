import type { Component } from 'solid-js';

import Header from '../Header/Header';
import TodosWrapper from '../Todo/TodosWrapper';

const App: Component = () => {
  return (
    <>
      <Header />
      <TodosWrapper />
    </>
  );
};

export default App;
