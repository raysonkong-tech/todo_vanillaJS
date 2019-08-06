var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var input = document.getElementById("userinput");
var listItems = document.querySelectorAll("li");

function inputlength() {
	return input.value.length
}

function addListElement() {
	var li = document.createElement("li");
	var text = document.createTextNode(input.value);
	
	// Add corresponding delete button
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.setAttribute("class", "delete");
	
	button.addEventListener("click", function() {
		var correspondingItem = button.parentElement;
		ul.removeChild(correspondingItem);
	})

	li.appendChild(text);
	li.appendChild(button);

	ul.appendChild(li);
	input.value = "";
}

function addListElementAfterClick() {
	if (inputlength() > 0){
		addListElement();
  }
}

function addListElementAfterKeypress(event) {
	if (inputlength() > 0 && event.keyCode === 13) {
		addListElement();

  }
}

// Call back functions do not need parenthesis ()
button.addEventListener("click", addListElementAfterClick)

input.addEventListener("keypress", addListElementAfterKeypress)

/**************/
// Challenge
/**************/
//1.  When click on list item, it toggles .done class on and off

// for (var i = 0; i < listItems.length; i++) {
// 	listItems[i].classList.add("done");
// }

listItems.forEach((item, index) => {
	item.addEventListener("click", function(){
		item.classList.toggle("done");
	});
});



// For some reason for loop is not working !!
// for (var i = 0; i < listItems.length; i++) {
// 	  listItems[i].addEventListener("click", function() {
// 	  	listItems[i].classList.toggle("done");
// 	  });
// }


// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button


// 3. when adding new list items, it automatically adds the delete button next to it.


