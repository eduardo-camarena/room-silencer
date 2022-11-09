import { Component, Accessor } from 'solid-js';

import { TodoElement } from './TodosWrapper';

const Todo: Component<TodoElement & { id: Accessor<number> }> = ({
  title,
  description,
}) => {
  return (
    <div class="pb-2 w-[30%]">
      <div class="rounded-lg bg-gray-800 py-3">
        <p class="text-lg text-gray-400">{title}</p>
        <p class="pt-0.5">{description}</p>
      </div>
    </div>
  );
};

export default Todo;
