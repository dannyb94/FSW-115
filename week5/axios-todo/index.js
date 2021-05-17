/*
Requirements

Part 1 - GET

The user can see their current list of todos.
Todos show up as soon as the page loads.
If a todo item is complete, it should have a strikethrough line on it
Images should be displayed as images if there are any

Part 2 - POST

The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item. Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.
A user should be able to give the item a title.
A user should be able to give the item a price.
A user should be able to give the item a description.

Part 3 - PUT Part 1

Each todo will have a checkbox where it can be marked complete or incomplete. 
Checking the checkbox should update the database. 

Part 4 - DELETE

A user will be able to delete todos (this is different from marking a todo as “completed”)
Each todo should be rendered with a button marked “X” or “Delete” that when clicked, will delete the Todo.

Part 5 - PUT Part 2 (extra credit)

Each Todo will have an "edit" button.
When clicked, the info will change to input boxes that are autofilled with the old Todo data
A user can change the value of these inputs
When the "edit" button is clicked, it will change to a "save" button.
When "save" is clicked, the form will disappear, and the new values will be displayed.
On save, the todo will be edited in the database

*/

function getData(){
    axios.get('http://api.bryanuniversity.edu/dussery/list')
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data){
    //document.getElementById('listCntnr').innerHTML = '' //Method works but not across all browser types 
    clearData()

    for(let i = 0; i < data.length; i++){
        const para = document.createElement('p')
        para.textContent = data[i].name
        document.getElementById('listCntnr').appendChild(para)
    }
}

function clearData(){
    const elem = document.getElementById('listCntnr')
    while(elem.firstChild){
        elem.removeChild(elem.firstChild)
    }
}

getData()

const todoForm = document["listForm"]

todoForm.addEventListener("submit", e => {
    e.preventDefault()
    const newListItem = {
        name: todoForm.name.value
    }
    todoForm.name.value = ""
    axios.post('http://api.bryanuniversity.edu/dussery/list', newListItem)
    .then(res => getData())
    .catch(err => console.log(err))
})

/*
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById(e.target.id).remove()
    e.target.remove()
})

var deleteBtn = document.createElement('input');
deleteBtn.setAttribute('type', 'button');
deleteBtn.setAttribute('name', 'delete');
deleteBtn.setAttribute('value', 'delete');
document.getElementById('listCntnr').appendChild(deleteBtn);
*/