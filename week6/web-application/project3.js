/*
Create a single page web application that does 3 get requests when the page loads and has the data show up at the same time.

APIs like https://swapi.dev/ and rickandmortyapi.com’s base URL will give you 3 more URLs to resources
Using chaining or async await, student will get all the data from all 3 URLs and then make it all show up on the webpage
Must be styled and fully responsive
*/

const getData = async() => {
    let response;
    try{
        response = await axios.get('https://rickandmortyapi.com/api/character/1')
        const character = await response.data.image
        const species = await response.data.species
        const origin = await axios.get(response.data.origin.url)
        const residents = await axios.get(origin.data.residents[0])
        const daughter = await residents.data.image
        console.log(residents)
        displayData(character, species, origin, daughter, residents)
    }
    catch(error){
        console.log(error)
    }
}
getData()

function displayData(character, species, origin, daughter, residents){
    const charImage = document.createElement('img')
    charImage.src = character;
    charImage.alt = "Rick Sanchez"
    document.body.appendChild(charImage)

    const para = document.createElement('p')
    para.textContent = `Born a lowly ${species} on ${origin.data.name}.`
    document.body.appendChild(para)

    var breakALeg = document.createElement('br')
    document.body.appendChild(breakALeg)

    const childImg = document.createElement('img')
    childImg.src = daughter;
    childImg.alt = "Beth Smith"
    document.body.appendChild(childImg)

    const para2 = document.createElement('p')
    para2.textContent = `${residents.data.name}, his offspring, is married with 2 children.`
    document.body.appendChild(para2)
}