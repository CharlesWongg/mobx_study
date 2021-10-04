import React from "react";

import TodoList from "./pages/TodoList";

import todoStore from './stores/todoStore'

function App() {
  return (
    <div>
      <TodoList todoStore={todoStore} />
    </div>
  );
}

export default App;
