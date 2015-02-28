var heading = document.getElementsByTagName("h1");

heading[0].addEventListener( "click", function () {
	var newPara = document.createElement( "p" );
	newPara.innerHTML = "This is click number x";

	document.body.appendChild( newPara );
});

