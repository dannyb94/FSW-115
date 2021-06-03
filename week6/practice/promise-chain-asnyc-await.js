/*
Create a single page web application that does 3 get requests when the page loads and has the data show up at the same time.

APIs like https://swapi.dev/ and rickandmortyapi.com’s base URL will give you 3 more URLs to resources
Using chaining or async await, student will get all the data from all 3 URLs and then make it all show up on the webpage
Must be styled and fully responsive
*/

// //Promise Chaining Method
// axios.get('https://rickandmortyapi.com/api/character/1')
//     .then(res => {
//         const originUrl = res.data.origin.url
//         console.log(originUrl)
//         return axios.get(originUrl)
//     })
//     .then(response => axios.get(response.data.residents[0]))
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))

//Async Await Method
const getData = async() => {
    let response;
    try{
        response = await axios.get('https://rickandmortyapi.com/api/character/1')
        const origin = await axios.get(response.data.origin.url)
        const residents = await axios.get(origin.data.residents[0])
        console.log(residents)
        displayOrigin(origin)
        displayResidents(residents)
    }
    catch(error){
        console.log(error)
    }
}
getData()

function displayOrigin(origin){
    //console.log(origin)
    const para = document.createElement('p')
    para.textContent = origin.data.name
    document.body.appendChild(para)
}

function displayResidents(residents){
    const para2 = document.createElement('p')
    para2.textContent = residents.data.name
    document.body.appendChild(para2)
}