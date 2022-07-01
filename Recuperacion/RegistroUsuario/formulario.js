"use strict"

function guardarInfo() {
    let nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        alert("Por favor, ingrese el nombre para el registro");
        return false;
    }
    if (document.getElementById("numeroDocumento").value == "") {
        alert("Por favor, ingrese el numero de documento");
        return false;
    }
    alert("Información guardada con éxito");
    limpiarFormulario();
    return true;
    
};
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("numeroDocumento").value = "";
   
};



    
    

    



