// First excercise adding numbers

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;

	addSum.innerHTML = "your sum is: " + (one+two);
}

// Second excercise showing / hiding pictures
var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");

simon.addEventListener("click", function(){
	if (simonPic.className === "hide") {
		simonPic.className = "";
	} else {
		simonPic.className = "hide";
	}
});