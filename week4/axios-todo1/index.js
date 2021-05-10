/*
Requirements

Part 1 - GET

The user can see their current list of todos.
Todos show up as soon as the page loads.
If a todo item is complete, it should have a strikethrough line on it
Images should be displayed as images if there are any
Hints:

A  createTodo  function that takes one todo and inserts it to the DOM is very useful. Use postman to get those first few todos in there with some images so you can style your list!
Base URL: http://api.bryanuniversity.edu/dussery/list   /[<listItemId>] <--Add for one list item
*/

axios.get('http://api.bryanuniversity.edu/dussery/list')
//.then(res => console.log(res))
.then(res => {
    for(let i = 0; i < res.data.length; i++){
        const para = document.createElement('p')
        para.textContent = res.data[i].name
        document.body.appendChild(para)
    }
    if(res.isComplete === true){
        return res.data.strike();
    } else if(res.isComplete === false){
        console.log("Item not complete.");
    }
})
.catch(err => console.log(err)) 

/**/