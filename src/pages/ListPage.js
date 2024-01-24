import ListItem from "./ListItem";
import useTodosState from "../states/useTodosState";
function ListPage() {
  const todosState = useTodosState();
  return (
    <>
      <h1>리스트 페이지</h1>

      <ul>
        {todosState.todos.map((todo) => (
          <ListItem todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default ListPage;
