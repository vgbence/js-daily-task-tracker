const addForm = document.querySelector(".add")
const list = document.querySelector(".todos")
const search = document.querySelector(".search input")

const generateTemplate = todo => {
    let newTodo = 
    `<li class="list-group-item d-flex justify-content-between align-items-center bg-light">
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
    </li>`;
    list.innerHTML += newTodo
};

const filterTodos = term => {
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));
    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};


addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
})

list.addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()
    }
})

search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
})