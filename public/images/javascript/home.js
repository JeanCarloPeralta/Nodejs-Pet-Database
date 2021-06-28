function loadSomePets(){
    fetch('/pets?page=1&limit=3')
        .then(response =>response.json())
        .then(Data => console.log(data));
}

loadSomePets();