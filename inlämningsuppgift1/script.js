let users = []

const inputFn = document.querySelector('#inputFn');
const inputLn = document.querySelector('#inputLn');
const inputE = document.querySelector('#inputE');
const addBtn = document.querySelector('#addUser');
const output = document.querySelector('#newUser');
const messageFn = document.querySelector('#errorFName');
const messageLn = document.querySelector('#errorLName');
const messageEmail = document.querySelector('#errorEmail');



const userList = () => {
    output.innerHTML = ''
    
    users.forEach(u => {
        output.innerHTML += 
        `<div id="${u.id}" class="m-1 bg-white p-2 rounded border d-flex justify-content-between align-items-center user-output">

            <div>
                <div> ${u.fn} ${u.ln}</div>
                <div class="small">${u.e}</div>
            </div>
                        
            <div class="output-btns">
                <button name="removeButton" id="delete" class="btn btn-danger">Delete</button>
                <button name="changeButton" id="change" class="btn btn-primary">Change</button>   
            </div> 
            
        </div>`
    })
}
  


addBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let checkE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if (inputFn.value == '') {
        messageFn.innerHTML = 'Please enter a valid Name *'
    }
    else if (inputFn.value.length < 2) {
        messageFn.innerHTML = 'Your name is too short *'
    }

    if (inputLn.value == '') {
        messageLn.innerHTML = 'Please enter a valid Name *'
    }
    else if (inputLn.value.length < 2) {
        messageLn.innerHTML = 'Your name is too short *'
    }

    if (!(inputE.value.match(checkE))) {
        messageEmail.innerHTML = 'Please enter a valid Email *'
    }
    else if (inputE.value == '') {
        messageEmail.innerHTML = 'Please enter a valid Email *'
    }

    let i;
    for(i = 0; i < users.length; i++){
        var test = users[i].e
        if(inputE.value == test) {break}
        console.log("samma")
        messageEmail.innerHTML = "This Email has already been taken"
    }
    

    if(inputFn.value && inputLn.value && inputE.value !== '' && inputFn.value.length && inputFn.value.length >= 2 && inputE.value.match(checkE) && inputE.value !== test)
    addUser()
    else {
        return false
    }

})
function addUser() {
    
        let user = {
            id: Date.now().toString(),
            fn: inputFn.value,
            ln: inputLn.value,
            e: inputE.value,
        }

        users.push(user);
        userList()
        
        inputFn.value = '';
        inputLn.value = '';
        inputE.value = '';
        messageFn.innerHTML = '';
        messageLn.innerHTML = '';
        messageEmail.innerHTML = '';
    
    
}

output.addEventListener('click', (e) => {
    if (e.target.name == "removeButton") {
    delUser(e)
    userList();
    }

    if (e.target.name == "changeButton") {
    changeForm(e)
    delUser(e)
    
    }
  })
  function delUser(e) {
    users = users.filter(user => user.id !== e.target.parentNode.parentNode.id)
  }

  function changeForm(e) {
    
     users.forEach(u => {
        
    if (u.id == e.target.parentNode.parentNode.id) 
        
    {
        inputFn.value = u.fn
        inputLn.value = u.ln
        inputE.value = u.e
    }
       
     })
    
  }
userList()