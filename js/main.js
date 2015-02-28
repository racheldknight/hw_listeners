window.addEventListener("resize", function(){
    document.getElementById("fact").innerHTML = "I put the milk in the bowl before the cereal.";
});

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}