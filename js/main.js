function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById('name');
	var lastName = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var password = document.getElementById('input-password');

	if(Validator.isText(name.value))
	{
		removeMessage('name');
	}else{
		createMessage('name', 'No es válido');
	}

	if(Validator.isText(lastName.value))
	{
		removeMessage('lastname');
	}else{
		createMessage('lastname', 'Ingresa tu apellido');
	}

	if(Validator.isValidPassword(password.value))
	{
		removeMessage('input-password');
	}else{
		createMessage('input-password', 'Tu password no es válido');
	}

	if(Validator.isEmail(email.value))
	{
		removeMessage('input-email');
	}else{
		createMessage('input-email', 'Tu e-mail no es válido');
	}
}


/*
function translate(){
    var title = document.getElementById("form-signin-heading");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
    var remenber = document.getElementsByTagName("span")[0];
    var button = document.getElementsByClassName("btn")[0];
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder = "Contraseña";
    remenber.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesión";
}
translate();
*/