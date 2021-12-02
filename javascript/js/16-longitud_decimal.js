"use strict"

/*metodo toFidex para recortar decimales */
var promedio = 2.56648226;
promedio = promedio.toFidex(2);
console.log(promedio);

/* Forzando el redondeo */
/* metodo slice para redonder */
var promedio2 = 2.56648226;
var promedio2str = promedio2.toString();
var promedio2conv = promedio2str.slice(0, 4);
var promedio2conv = parseFloat(promedio2conv);
console.log(promedio2conv);...console.log.toString.toString.