
var tagList = document.getElementsByTagName('LI');
for (var i = 0; i < tagList.length; i++) {
	// create a cross tag
	var span = document.createElement("span");
	var cross = document.createTextNode("\u00D7");
	span.appendChild(cross);
	span.className = "pull-right close"
	tagList[i].appendChild(span);
	// create close tag ends

	// create edit tag
	// var newSpan = document.createElement("span");
	// var pencil = document.createTextNode("\uD83D\uDD89");
	// newSpan.appendChild(pencil);
	// newSpan.className = "pull-right pencil";
	// tagList[i].appendChild(newSpan);
	// create edit tag ends

}

//click a cross button to remove item from the list
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

//click a pencil button to make input tag in it
var pencil = document.getElementsByClassName("pencil");
for (var i = 0; i < pencil.length; i++) {
	pencil[i].onclick = function() {
		var x = this.parentElement;
		var t = x.firstChild;
		var u = document.createElement("input");
		var tt = x.innerHTML = u;
		var mn = tt.value = t;
		console.log(t);
		console.log(u);
		console.log(tt);
		console.log(mn);
		console.log(x);
		// var v = u.value = t;
	}
}


// click to apply checked class means strike
var list =document.querySelector('ul');
list.addEventListener('click', function(ev){
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
},false)

//Add item when press ADD button
function btnAddItem(){
	var createList = document.createElement("li");
	var inputText = document.getElementById("inputItem").value;
	var createTextNode = document.createTextNode(inputText);
	var listCreatedWithText = createList.appendChild(createTextNode);
	createList.className = "list-group-item";
	document.getElementById("inputItem").value = '';
	if (inputText === '') {
		alert("Please enter the item")
	}
	else{
		document.getElementById("unorderList").appendChild(createList);
	}

	 var span = document.createElement("SPAN");
  	var txt = document.createTextNode("\u00D7");
  	span.className = "close";
  	span.appendChild(txt);
  	createList.appendChild(span);

  	var close = document.getElementsByClassName("close");
	for (var i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	}
}
}



