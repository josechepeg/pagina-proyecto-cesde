

//Vamos a crear un inicio de sesión simple sin válidaciones por ahora



let email = "jgabrielagudelov@gmail.com";
let password = "xyz123";

let userEmail = prompt("Ingrese el correo registrado");
let userPassword = prompt("Ingrese la contraseña registrada");


if (email.match(userEmail) && password.match(userPassword)){
document.write("Bienvenido al sistema");


}else{
    alert("Valide sus credenciales");
}