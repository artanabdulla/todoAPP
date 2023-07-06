const todoList = [];
const addBtn = document.getElementById("btn");
const jsInput = document.querySelector('.inputTodo');
const OutputTodo = document.querySelector('.outputTodo');


addBtn.addEventListener("click", function(){
addToDo();

})

function addToDo() {
    const nameI = jsInput.value;
    todoList.push(nameI);
    jsInput.value = '';
    let todolistHtml = '';
    console.log(todoList);
    for (let i=0; i<todoList.length; i++) {
       const todo = todoList[i];
       const html = `<p>${todo}</p>`;
       todolistHtml += html;
       document.querySelector('.todo-div').innerHTML = todolistHtml; 
    }
   
       
}