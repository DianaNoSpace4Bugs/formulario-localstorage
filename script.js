

document.getElementById("formulario").addEventListener("submit", function (event){
    event.preventDefault();
    
    let elementosFormulario = document.getElementById("formulario").elements;
    for (let index = 0; index <= elementosFormulario.length - 1; index++) {
        if (elementosFormulario[index].type == "text" || "url" || "email") {
            console.log((elementosFormulario[index]).value);
            localStorage.setItem(elementosFormulario[index].id,JSON.stringify(elementosFormulario[index].value))
        }
        
    }
    console.log(localStorage);
})