var myBtn2 = document.getElementById("second");
myBtn2.addEventListener('click', e => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')
    //.then(res => console.log(res.data.results))
    .then(res => {
        for (let i = 0; i , res.data.results.length; i++){
            const header2 = document.createElement('h3')
            header2.textContent = `${res.data.results[i].name}`
            document.body.appendChild(header2)
        }
    })
    .catch(error => console.log(error))
});