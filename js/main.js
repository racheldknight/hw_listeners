var myForm = document.getElementById("form");

myForm.addEventListener( "submit", function (event) {
    event.preventDefault();
    var firstname = document.getElementById( "firstname" ).value;
    var lastname = document.getElementById( "lastname" ).value;
    var email = document.getElementById( "email" ).value;
    var message = document.getElementById( "message" ).value;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(message);
});

