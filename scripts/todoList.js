const todoList = [];

renderTodoList()

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  // console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  // const todoListElement = document.querySelector(".js-todo-list");

  const name = inputElement.value;
  todoList.push(name);
  // console.log(todoList);

  // todoListElement.innerHTML = `${name}`;
  inputElement.value = "";
  renderTodoList()
}

function handListOnKeyDown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
