var logElements = document.getElementsByClassName("btn");

logElements[0].addEventListener( "click", function () {
	var firstname = document.getElementById( "firstname" ).value;
	var lastname = document.getElementById( "lastname" ).value;
	var email = document.getElementById( "email" ).value;
	var message = document.getElementById( "message" ).value;
	console.log (firstname.value);
	console.log (lastname.value);
	console.log (email.value);
	console.log (message.value);
});

