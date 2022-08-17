const API_URL = 'https://www.themealdb.com';
const xhr = new XMLHttpRequest();
const nameSearch = document.getElementById("nameSearch").value;

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200){
        //0 = UNSET no se ha llamado al metodo open
        //1 = OPENED , se ha llamado al metodo opened
        //2 = HEADERS_RECEIVED, se está llamando al metodo send()
        //3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
        //4 = DONE , se ha completado la operacion del
        console.log("response is "+ this.response);
        const data = Object.entries(JSON.parse(this.response));
        console.log("Is data an array? " + Array.isArray(data));
        const dataHead = data[0][0];
        const dataMeals = data[0][1];
        console.log(dataHead);
        console.log(dataMeals);
        const HTMLResponse = document.querySelector("#app");

        // Previous Code order
        // const template = data.map((meals) => `<li>${meals.strMeal}</li>`);
        // console.log(template)
        // HTMLResponse.innerHTML = `<ul>${template}</ul>`;

        // New Code order
        HTMLResponse.innerHTML = `<ul></ul>`;
        const template = data.map((dataMeals) => `<li>${dataMeals[0].strMeal}</li>`);
        HTMLResponse.firstChild.innerHTML = `<li>${dataMeals[0].strMeal}</li>`;
        console.log(template.toString())

    }
}

function apiByName(nameSearch) {
    const xhrequest = new XMLHttpRequest();
    console.log("function is running")
    console.log(nameSearch)

    xhrequest.addEventListener("load", function(){
        if(this.readyState === 4 && this.status === 200){
        //0 = UNSET no se ha llamado al metodo open
        //1 = OPENED , se ha llamado al metodo opened
        //2 = HEADERS_RECEIVED, se está llamando al metodo send()
        //3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
        //4 = DONE , se ha completado la operacion del
        // const data = Object.entries(JSON.parse(this.response));
        // const template = data.map((meals) => `<li>${meals.strMeal}</li>`);
        // console.log("Array: ",Array.isArray(data));
        // console.log("this is the data:", data);

    }
    });
    xhrequest.open("GET",`${API_URL}/api/json/v1/1/search.php?s=${nameSearch}`);
    xhrequest.send();
}



function searchByName(){
    let newValue = document.getElementById("nameSearch").value;
    console.log(newValue);
    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET",`${API_URL}/api/json/v1/1/search.php?s=${newValue}`);
    xhr.send();
}

function logValue(){
    let newValue = document.getElementById("nameSearch").value;
    console.log(newValue)
}