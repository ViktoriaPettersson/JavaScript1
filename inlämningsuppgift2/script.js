
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
    let html=""
    if(td.completed == false) {
    html = `
    <div class="output container">
        <div id="output">
            <div id="${td.id}" class="output-item d-flex justify-content-between align-items-center">
                <div class="title">${td.title}</div>
                <button class="btn btn-danger delete">X</button>
            </div>
        </div>
    </div>
    `    
    }
    else if (td.completed == true) {
    html = `
    <div class="output container">
        <div id="output">
            <div id="${td.id}" class="output-item d-flex justify-content-between align-items-center">
                <div class="title checked">${td.title}</div>
                <button class="btn btn-danger delete">X</button>
            </div>
        </div>
    </div>
    `    
    }
    
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
  test(e.target.parentNode.id)
  
})

function test(id) {
  todos.forEach(t => {
   
    if(t.id == id) 
    {
      // console.log(t.completed)
      t.completed = !t.completed
      // console.log(t.completed)
      tdList()
    }
  })
}
