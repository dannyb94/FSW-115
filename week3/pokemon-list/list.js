const xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);//
        let data = JSON.parse(xhr.responseText);
        showData(data.results);
        console.log(data.results);//
    } else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText);
    }
};

function showData(data){
    for (i = 0; i < data.length; i++){
        const pokeChar = document.createElement("p");
        pokeChar.textContent = data[i].name;
        document.body.appendChild(pokeChar);
    }
};