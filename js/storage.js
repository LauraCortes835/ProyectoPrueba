var login = document.getElementById("login");
var salir = document.getElementById("salir");
var registro = document.getElementById("registro");
var labelUsuario = document.getElementById("labelUsuario");
// -------------Funciones------------
function registroUsuario() {
let user = prompt("Registra tu usuario");
let pass = prompt ("Registra tu contraseña");
localStorage.setItem('usuario', user);
localStorage.setItem('clave', pass);
    alert("Registro exitoso");
}
function loginUsuario() {
    let user = prompt("Escribe tu usuario");
    let pass = prompt("Escribe tu contraseña");

    //Buscar los datos en el localStorage

    if (user ==localStorage.getItem('usuario') || pass == localStorage.getItem ('clave')) {
        alert("¡Login exitoso!");
        labelUsuario.innerHTML = user;
    } else {
        alert("Error en el Login");
    }
}
function salirSesion() {
    //1 -poner vacia la variable user (usuario)
    let user ="";
    //2-Poner la vacia la variable pass (clave)
    let pass="";
    localStorage.setItem('clave',pass)
    //3-Labelusuario lo va poner vacio user
    labelUsuario.innerHTML =user  ;
}
//--------------Usuario en sesion------------//
if (localStorage.getItem('usuario')) {
    let usuarioStorage = localStorage.getItem('usuario')
    labelUsuario.innerHTML= usuarioStorage;
} 
    




/**
 * ----------Onclicks-----------
 */
login.onclick = function () {
    loginUsuario();
    
}
salir.onclick=function () {
    salirSesion();
}
registro.onclick=function () {
    registroUsuario();
}