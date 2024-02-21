const todoInp = document.getElementById('todo-inp');
const todoBtn = document.getElementById('todo-btn');
const list = document.getElementById('list');


function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
  
const todos = [
    {
        id: uuid(),
        task: "Go to Gym"
    },
    {
        id: uuid(),
        task: "Buy Vegetables"
    },
    {
        id: uuid(),
        task: "Learn Web"
    },
];


// Takes all the todos and add them to the UI
function refreshTodos() {
    // remove all the li which are there in the list
    while (list.firstChild) {
        list.firstChild.remove();
    }


    for (let todo of todos) {
        const li = document.createElement('li');
        li.innerText = todo.task;
        list.append(li);
    }
}


// Add new todo
function addTodo(task) {
    todos.push({ id: uuid(), task: task });
    refreshTodos();
}


// Initialise todo
function init() {
    for (let todo of todos) {
        const li = document.createElement('li');
        li.innerText = todo.task;
        list.append(li);
    }
}

init();


todoBtn.addEventListener('click', function () {
    const inpText = todoInp.value;
    addTodo(inpText)
});

