class artesanos{
    constructor(manualidad,material,precio,ciudad,imagen){
        this.manualidad=manualidad;
        this.material=material;
        this.precio=precio;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let art1= new artesanos("collar","hilo","20000","Bogota","img/collaar.jpg");
let art2= new artesanos("collar","hilo","20000","Bogota","img/collaar.jpg");
let art3= new artesanos("collar","hilo","20000","Bogota","img/collaar.jpg");
let art4= new artesanos("jarron","fique","40000","San Agustin","img/jarronn.jpg");
let art5= new artesanos("jarron","fique","40000","San Agustin","img/jarronn.jpg");
let art6= new artesanos("jarron","fique","40000","San Agustin","img/jarronn.jpg");
let art7= new artesanos("bolso ","miembre","80000","San Agustin","img/bolso.jpg");
let art8= new artesanos("bolso ","miembre","80000","San Agustin","img/bolso.jpg");
let art9= new artesanos("bolso ","miembre","80000","San Agustin","img/bolso.jpg");

function Busqueda(art){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contimg= document.createElement("div");
     contenedorPrincipal.appendChild(contimg);
     contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", art.imagen);
    img.setAttribute("class","img");
    contimg.appendChild(img);

    let valorart= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(art.precio);

    let textValorart= document.createTextNode("$" + precioFormat);
    valorart.appendChild(textValorart);
    valorart.setAttribute("class","precio");
    contimg.appendChild(valorart);

    let descripcion= document.createElement("label");
    let textdescart=document.createTextNode(art.producto+" " +art.material+" "+ art.precio);
    descripcion.appendChild(textdescart);
    descripcion.setAttribute("class","descripcion");

    contimg.appendChild(descripcion);


    let materialart=document.createElement("label");
    let textmaterial=document.createTextNode(art.material);
    materialart.appendChild(textmaterial);
    materialart.setAttribute("class","material");
    contimg.appendChild(materialart);


    let city=document.createElement("label");
    let textcity=document.createTextNode(art.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contimg.appendChild(city);
    
    let separador=document.createElement("div");
    contimg.appendChild(separador);
    separador.setAttribute("class","separador");

} 

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="collar"){
            Busqueda(art1); 
            Busqueda(art2); 
            Busqueda(art3);          
        }
        else if(Busq=="jarron"){
            Busqueda(art4);
            Busqueda(art5);
            Busqueda(art6);
        }
        
        else if(Busq=="bolso"){
            Busqueda(art7);
            Busqueda(art8);
            Busqueda(art9);s
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}