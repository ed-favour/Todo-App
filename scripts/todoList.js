const todoList = JSON.parse(localStorage.getItem('list'))||[]

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index)=> {
    const {name, dueDate} = todoObject
    const html = `
    <div>${name}</div>
    <div> ${dueDate}</div>
     <button class="delete-todo-btn js-todo-delete-btn">Delete</button> 
      `;
    todoListHTML += html;
  });

 
  
  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   const {name, dueDate} =todoObject
  //   const html = `
  //   <div>${name}</div>
  //   <div> ${dueDate}</div>
  //    <button onclick="
  //       todoList.splice(${i},1);
  //       renderTodoList()
  //     " class="delete-todo-btn js-todo-delete-btn">Delete</button> 
  //     `;
  //   todoListHTML += html;
  // }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  

 document.querySelectorAll('.js-todo-delete-btn')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}
document.querySelector(".js-add-todo-btn").addEventListener('click',()=>{
  addTodo()
});


function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  // const todoListElement = document.querySelector(".js-todo-list");

  const name = inputElement.value;

  const datInputElment = document.querySelector(".js-due-data-input")
  const dueDate = datInputElment.value

  todoList.push({
    name,
    dueDate});

  inputElement.value = "";
  renderTodoList()
}

function handListOnKeyDown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
