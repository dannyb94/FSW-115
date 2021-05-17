/*
•This website needs to have at least 2 pages, where each page presents a button
•When the button is clicked, an axios.get request will go to an API of the students choosing and have the response data show up as a list on the HTML page.
•Must be fully styled - responsive
•2 APIs must be used, (one for each page)
*/
var myBtn = document.getElementById("first");
myBtn.addEventListener('click', e => {
    axios.get('https://rickandmortyapi.com/api/character/1,67,45,183')
    //.then(res => console.log(res))
    .then(res => {
        for (let i = 0; i , res.data.length; i++){
            //var brk = document.createElement('br')
            const header = document.createElement('h3')
            //const images = new Image()
            //images.src = res.data[i].image;
            header.textContent = res.data[i].name //`${images}${brk}${res.data[i].name}`
            document.body.appendChild(header)
            //document.body.appendChild(images)
        }
    })
    .catch(err => console.log(err))
});

