

/*function saludo(){

    console.log("Hola Developer");

}
saludo();

let nombre = prompt("Ingrese el nombre");
let valor = prompt("Ingrese el valor");

function multiplicador(nombre, valor){

let proceso = valor*1000;

document.write("El usuario: " + nombre + " recibe el valor de: "+proceso)
}
multiplicador(nombre, valor);





function promediador(){
let Notas = new Array();
Notas[0] = nota1;
Notas[1] = nota2;
Notas[2] = nota3;

nota1 = parseInt(prompt("Ingrese la primera nota"));
nota2 = parseInt(prompt("Ingrese la segunda nota"));
nota3 = parseInt(prompt("Ingrese la tercera nota"));



 promedio = (nota1 + nota2 + nota3)/3;

document.write("Las notas del estudiante son: " + Notas + "<br>");
document.write("El promedio del estudiante es: " + promedio);
}
promediador();
*/

let carga = parseInt(prompt("Ingrese la carga de su dispositivo"));
function verificarCargaPorcentaje(carga){
   

if(carga === 100){
document.write("Desconecte el cargador");


}else if(carga === 50){
document.write("Carga a la mitad");

}else if(carga === 15){
    document.write("Modo Ahorro");


}else if(carga === 0){
    document.write("Apagando el dispositivo");


}else{
    document.write("Introducir un porcentaje válido de carga");
}
}
verificarCargaPorcentaje(carga);


