let init = prompt("Presione 1 para iniciar")

while(init != 0) {

    let opc = parseInt (prompt("Seleccione \n 1. Regitrar un usuario \n 2. Iniciar Sesion \n 3. Salir"))

switch (opc){

    case 1: 
    document.write("1.Registro");
    let email = "jgabrielagudelov@gmail.com";
let password = "xyz123";

break;

    case 2:
        document.write("2.Iniciar Sesión");

let userEmail = prompt("Ingrese el correo registrado");
let userPassword = prompt("Ingrese la contraseña registrada");


if (email.match(userEmail) && password.match(userPassword)){
document.write("Bienvenido al sistema");


}else{
    alert("Valide sus credenciales");
}
        break;

        case 3:
            document.write("3.Salir");
            init = 0;
            break;
            default: 
            alert("Selecione una opcion correcta");
            break;
}

}

