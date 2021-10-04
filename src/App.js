import React, { useState } from "react";

import TodoList from "./pages/TodoList";
import SmartTodo from './pages/SmartTodo'
import UseLocalStore from "./pages/UseLocalStore";

import todoStore from './stores/todoStore'

function App() {
  const [countInit, setCountInit] = useState(-1)
  return (
    <div>
      <TodoList todoStore={todoStore} />
      <SmartTodo />
      <button onClick={() => setCountInit(countInit + 1)}>add countInit: {countInit}</button>
      <UseLocalStore init={countInit} />
    </div>
  );
}

export default App;
