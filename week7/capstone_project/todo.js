/*
Build a To-do List app that uses GET, POST, PUT & DELETE 

Must make use of at least 2 APIs
One to handle the CRUD applications (BU To-Do API would be a good place to start).
Another one to populate some portion of each todo. It can not be entirely hard-coded. Using any of the APIs you are familiar with is okay but be aware: if you try to use a new one, acquiring a key could take days or weeks.
Must use the promise based HTTP client for the browser and node.js, Axios
Must be fully styled and responsive
Must be fully functional and contain all 4 HTTP methods for RESTful services
*/

const url = 'http://api.bryanuniversity.edu/dussery/list'

//-----------------GET------------------
const getData = async() => {
    let response;
    try{
        response = await axios.get(url)
        const list = await response.data
        displayData(list)
    }
    catch(error){
        console.log(error)
    }
}

function displayData(list){
    clearData()
    
    for(let i = 0; i < list.length; i++){
        const h4 = document.createElement('h4')
        h4.className = 'listedItems'
        h4.textContent = list[i].name
        document.getElementById('sections').appendChild(h4)
        //console.log(list[i].description)

        const para = document.createElement('p')
        para.textContent = `Details: ${list[i].description}`
        h4.append(para)

        const dltBtn = document.createElement('button')
        dltBtn.textContent = 'DELETE'
        h4.append(dltBtn)
        dltBtn.addEventListener('click', e => {
            removeData()
            // const trashData = async() => {
            //     let bye;
            //     try{
            //         bye = await axios.delete(url)
            //         const dlt = await bye.data
            //         removeData(dlt)
            //     }
            //     catch(error){
            //         console.log(JSON.stringify(error))
            //     }
            // }
            // function goAway(dlt){
            //     removeData()

            //     for(let i = 0; i < dlt.length; i++){
            //         const select = document.getElementById('sections')
            //     }
            // }

            function removeData(){
                const select = document.getElementById('sections')
                select.remove()
            }
            
            //trashData()
        })

        var brk = document.createElement('br')
        document.getElementById('sections').append(brk)
    }

    
}

function clearData(){
    const elem = document.getElementById('sections')
    while(elem.firstChild){
        elem.removeChild(elem.firstChild)
    }
}

getData()

//-------------------Delete---------------------
// const trashData = async() => {
//     let bye;
//     try{
//         bye = await axios.delete(url.data /*`${e.target.id}`*/)
//         //const list = await response.data
//         trashData(list)
//     }
//     catch(err){
//         console.log(err)
//     }
// }


// function out(list2){
//     trashData()

//     var dltBtn = document.createElement('button')
//         dltBtn.textContent = 'Trash'
//         dltBtn.addEventListener('click', trashData())
//         document.getElementById('sections').append(dltBtn)
// }


//-----------------Form submit button------------------
const toDoForm = document['listForm']

toDoForm.addEventListener('submit', e => {
    e.preventDefault()
    const newListItem = {
        name: toDoForm.name.value
    }
    toDoForm.name.value = ''
    axios.post(url, newListItem)
    .then(res => getData())
    .catch(err => console.log(err))
})














//-----------------PUT------------------
// const editData = async() => {
//     let response2
//     try{
//         response2 = await axios.put('http://api.bryanuniversity.edu/dussery/list')
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// editData()

//-----------------DELETE------------------
// const trashData = async() => {
//     let response3
//     try{
//         response3 = await axios.delete('http://api.bryanuniversity.edu/dussery/list')
//         //console.log(resp.data)
//         const list2 = await response.data
//         deleteData(list2)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// trashData()

// function deleteData(list2){
//     for(let i = 0; i < list2.length; i++){
//         const btn = document.createElement('button')
//         // btn.type = 'button'
//         // btn.value = 'submit'
//         // btn.className = 'trash'
//         btn.textContent = '–'
//         document.getElementsByClassName('listedItems').append(btn)

//         btn.addEventListener('click', (e) => { 
//             if(e.target.className == 'listedItems'){
//                 e.preventDefault()
//                 document.getElementsByClassName(e.target.className).remove()
//                 e.target.remove()
//             }
//         })

//         // const para = document.createElement('p')
//         // para.textContent = list[i].name
//         // document.getElementById('listCntnr').appendChild(para)
//     }
// }