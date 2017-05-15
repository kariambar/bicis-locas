
function validateForm(){ 
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var contrasena = document.getElementById('input-password').value;
	var seleccionar = document.getElementById("form-control").value;
  

//Todos los campos son obligatorios, excepto los dos últimos.
if (nombre == "" || nombre.length == 0){
        var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        return span;
    }
}