/*Validando cada campo */
function validateForm(){
    var nombre =  document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementsByClassName("input-password").value;
    var bici = document.getElementsByClassName("form-group input-box").value;
    var tuiter = document.getElementById("input-social");
    var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

/*Campos de validacion Nombre */
if (nombre == "" || nombre.length == 0){
        var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        //return span;
    }else if( nombre != letter){
        var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe contener solo letras");
        span.appendChild(texto);
        }

   /*Campos de validacion Apellido */ 
if (lastname == "" || lastname.length == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("lastname");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su apellido");
        span.appendChild(texto);
       // return span;
}

/*Campos de validacion Email */
if (email == "" || email == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("input-email");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su email");
        span.appendChild(texto);
       
}

/*Campos de validacion Contraseña */
if (password == "" || password == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("input-password");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su contraseña");
        span.appendChild(texto);
       
}

/*Campos de validacion Bici */
if (bici == "" || bici == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("form-group input-box");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe seleccionar un tipo de bicicleta");
        span.appendChild(texto);
       
}
}
