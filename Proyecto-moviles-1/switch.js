//  Vamos a hacer una aplicación que nos permita seleccionar opciones de un menu
//1. Registro 2. Inicio de sesion. 3. Salir

let opc = parseInt (prompt("Seleccione \n 1. Regitrar un usuario \n 2. Iniciar Sesion \n 3. Salir"))

switch (opc){

    case 1: 
    document.write("1.Registro");
    break;

    case 2:
        document.write("2.Iniciar Sesión");
        break;

        case 3:
            document.write("3.Salir");
            break;
            default: 
            alert("Selecione una opcion correcta");
            break;
}