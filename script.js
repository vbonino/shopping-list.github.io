var input = document.getElementById("userinput");
var ul = document.getElementById("ul");
var button = document.getElementById("enter");
var list_element = document.querySelectorAll("li");

function createTrash(){
	var trash = document.createElement("button")
	trash.className = "btn btn-light trash";
	trash.type = "button";
	var i = document.createElement("i");
	i.className = "fa fa-trash";
	trash.appendChild(i);
	trash.addEventListener('click', trashElement);
	return trash;
}

function createText(){
	var li = document.createElement("li");
	var p = document.createElement("p");
	return [li, p];
}

n = 1;
function addElement() {
		trash = createTrash();
		li = createText()[0];
		p = createText()[1];

		p.setAttribute("id", n);
		p.setAttribute("OnClick", "line_through(this.id)");
		p.appendChild(document.createTextNode(input.value));

		m = -n;
		trash.setAttribute("id", m);
		trash.setAttribute("OnClick", "trashElement(this.id)");

		li.appendChild(trash.cloneNode(true));
		li.appendChild(p);
			
		ul.appendChild(li);
		input.value = "";
		n ++;
	}

function addElementByKeyPress() {
	if (input.value.length > 0 && event.keyCode === 13){
		addElement();
	}
}

function addElementByClick(){
	if (input.value.length > 0){
		addElement();
	}
}

function line_through(clicked_id){
	element_done = document.getElementById(clicked_id);
	if (element_done.style.textDecoration != "line-through"){
			element_done.style.textDecoration ="line-through";
			
	} else {
		element_done.style.textDecoration ="none";
		
	}
}

function trashElement(clicked_id){
	element_trashed = document.getElementById(clicked_id);
	text_trashed = document.getElementById(-clicked_id);
	text_trashed.remove();
	element_trashed.remove();
}

button.addEventListener('click', addElementByClick);
input.addEventListener("keypress", addElementByKeyPress);
document

