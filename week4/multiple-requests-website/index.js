/*
•This website needs to have at least 2 pages, where each page presents a button
•When the button is clicked, an axios.get request will go to an API of the students choosing and have the response data show up as a list on the HTML page.
•Must be fully styled - responsive
•2 APIs must be used, (one for each page)
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