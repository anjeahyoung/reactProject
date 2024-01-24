import useTodosState from "../states/useTodosState";

function WritePage() {
  const todosState = useTodosState();
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();
    if (form.content.value.length === 0) {
      alert("할일을 입력해주세요.");
      form.content.focus();
    }

    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };
  return (
    <>
      <h1>작성 페이지</h1>
      <div>현재 글 개수 : {todosState.todos.length}</div>
      <form onSubmit={onSubmit}>
        <input type="text" name="content" placeholder="할일을 입력해주세요." />
        <input type="submit" value="작성" />
      </form>
    </>
  );
}

export default WritePage;
