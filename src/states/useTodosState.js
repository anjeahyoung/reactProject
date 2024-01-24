import { useRef } from "react";
import { useRecoilState } from "recoil";
import { todosAtom } from "./todo";

function useTodosState() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const lastTodoIdRef = useRef(todos[0].id);

  const findTodoById = (id) => {
    const index = todos.findIndex((todo) => todo.id == id);

    if (index == -1) {
      return null;
    }

    return todos[index];
  };

  const findTodoIndexById = (id) => {
    const index = todos.findIndex((todo) => todo.id == id);

    if (index == -1) {
      return null;
    }

    return index;
  };

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;
    const newTodo = {
      id,
      content: newContent,
    };

    setTodos((todos) => [newTodo, ...todos]);
  };

  const updateTodo = (newContent, index) => {
    const newTodo = todos.map((todo, _index) =>
      index != _index ? todo : { todo, content: newContent }
    );
    setTodos(newTodo);
  };

  const updateTodoById = (newContent, id) => {
    const index = findTodoIndexById(id);
    updateTodo(newContent, index);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => index != _index);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const removeTodoById = (id) => {
    const index = findTodoIndexById(id);
    removeTodo(index);
  };

  return {
    todos,
    addTodo,
    updateTodo,
    updateTodoById,
    removeTodo,
    removeTodoById,
    findTodoById,
  };
}

export default useTodosState;
