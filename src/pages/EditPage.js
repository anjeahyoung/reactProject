import { useNavigate, useParams } from "react-router-dom";
import useTodosState from "../states/useTodosState";

function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const todosState = useTodosState();
  const todo = todosState.findTodoById(id);
  console.log(todo);
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();
    if (form.content.value.length === 0) {
      alert("할일을 입력해주세요.");
      form.content.focus();
    }

    todosState.updateTodoById(form.content.value, todo.id);

    navigate("/list", { replace: true });
  };
  return (
    <>
      <h1>수정 페이지</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="content"
          placeholder="할일을 입력해주세요."
          defaultValue={todo.content}
        />
        <input type="submit" value="수정" />
        <input type="button" onClick={() => navigate("/list")} />
      </form>
    </>
  );
}

export default EditPage;
