
const output = document.querySelector("#output")
const addBtn = document.querySelector("#add-btn")
const input = document.querySelector("#input")
const err = document.querySelector("#error-message")


let url = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
let todos = []


const tdFetch = () => {
fetch(url)
.then(response => response.json())
.then(data => {
    todos = data;
    // console.log(data)
    tdList();
})
}
tdFetch()

const tdList = () => {

    output.innerHTML = ""
    todos.forEach(td => {
    let html = `
    <div class="output container">
        <div id="output">
            <div id="${td.id}" class="output-item">
            <div class="title">${td.title}</div>
            </div>
        </div>
    </div>
    `    
    output.innerHTML += html
    });

}
const createTodo = (title) => {

    fetch(url,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title,
        completed: false,
      })
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      todos.unshift(data);
      tdList(todos);
    })
  
  }

addBtn.addEventListener ('click', e => {
    e.preventDefault();
    validate()
})

const validate = () => {
  if(input.value != "")
  {
    createTodo(input.value)
    input.classList.remove("is-invalid")
  }
  else {
    input.classList.add("is-invalid")
  }
  input.value = ""
}

output.addEventListener("click", e => {
 
  if(e.target.classList.contains("title"))
  
  todos.forEach(t => {
   
    if(t.id == e.target.parentNode.id && t.completed == false) 
    {
      // console.log(t.completed)
      t.completed = !t.completed
      // console.log(t.completed)
      e.target.classList.add("checked")
    }
    else if(t.id == e.target.parentNode.id && t.completed == true) {
      // console.log(t.completed)
      t.completed = !t.completed
      // console.log(t.completed)
      e.target.classList.remove("checked")
    }
    console.log(todos)
  })

})
