const todoList = [{
  name:'make dinner',
  duedate:'2022-12-22'
},{
  name:'wash dishes',
  duedate:'2022-12-22'
}];

renderTodoList()

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index)=> {
    const {name, duedate} = todoObject
    const html = `
    <div>${name}</div>
    <div> ${duedate}</div>
     <button onclick="
        todoList.splice(${index},1);
        renderTodoList()
      "class="delete-todo-btn">Delete</button> 
      `;
    todoListHTML += html;
  })
  
  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   const {name, duedate} =todoObject
  //   const html = `
  //   <div>${name}</div>
  //   <div> ${duedate}</div>
  //    <button onclick="
  //       todoList.splice(${i},1);
  //       renderTodoList()
  //     " class="delete-todo-btn js-todo-delete-btn">Delete</button> 
  //     `;
  //   todoListHTML += html;
  // }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  // NOT WORKING
  // document.querySelectorAll(".js-todo-delete-btn").forEach((deleteButton, index)=>{
  //   deleteButton.addEventListener('click', ()=>{
  //     todoList.splice(index,1);
  //       renderTodoList()
  //   });
  // })
  document.querySelector(".js-todo-delete-btn").addEventListener('click',()=>{
    addTodo()
  })
}
document.querySelector(".js-add-todo-btn").addEventListener('click',()=>{
  todoList.splice(index,1);
  renderTodoList()
})


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
