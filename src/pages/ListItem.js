import { NavLink } from "react-router-dom";
import useTodosState from "../states/useTodosState";

function ListItem({ todo }) {
  const todosState = useTodosState();
  const removeTodo = () => {
    alert(todo.id + "삭제 실행");
    todosState.removeTodoById(todo.id);
  };
  return (
    <>
      <li key={todo.id}>
        {todo.id} : {todo.content}
        <NavLink to={`/edit/${todo.id}`}>수정</NavLink>
        <button onClick={removeTodo}>삭제</button>
      </li>
    </>
  );
}

export default ListItem;
