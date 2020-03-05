var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

		// creates delete button, and refers to function removeParent:
		var btnDelete = document.createElement("button");
		btnDelete.appendChild(document.createTextNode(" X "));
		li.appendChild(btnDelete);
		btnDelete.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Adds strike-through toggle
function toggleItem(){
	var liStrike = event.target;
	liStrike.classList.toggle("done");
}

// Removes list-item
function removeParent(event){
	event.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleItem);
