let rostro = prompt("Acerque su rostro: ")
//let i = parseInt(prompt("Indique su posición"))

let rostros = ["Pepito", "Laura", "Pedro"]

function reconocer(){
if(rostros.includes(rostro)){
return true


}else{
    return false
}



}

alert("El valor de la funcion reconocer es: " + reconocer(rostro))

function abrirPuerta(reconocer){

if(reconocer() == true){

    alert("Abriendo puerta");
}else{
alert("Debe registrarse en TI")

}

}

abrirPuerta(reconocer);