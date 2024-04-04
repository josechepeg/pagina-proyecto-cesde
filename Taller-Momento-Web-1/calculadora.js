let operacion;

while(true){

    operacion = prompt("Que operación deseas hacer (a: sumar, b: restar, c: multiplicar, d: dividir, e: salir)" );
    
    if(operacion === 'e'){
        break;
    }

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;

    switch(operacion){
      case 'a':
        resultado = num1 + num2;
        break;

        case 'b':
            resultado = num1 - num2;
            break;

        case 'c': 
        resultado = num1 * num2;
        break;

        case 'd': 
        if(num2 !== 0){
        resultado = num1 / num2;
        }else{
            resultado = "No se puede dividir por cero";
        }
        break;
        default:
            resultado = "Operacion no válida";
            break
    }

    document.write("El resultado es: "+resultado);
    document.write("<br>");
    



}