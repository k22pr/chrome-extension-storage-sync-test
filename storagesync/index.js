//getData 
chrome.storage.sync.get(function(data){
	if(data.input == undefined) getData = {input:[]};
	else getData = data;
});
window.onload = function(){
	content = {
		btn : document.getElementById("save"),
		input : document.getElementById("text"),
		list : document.getElementById("list"),
		status : document.getElementById("status"),
		save : getData
	}
	
	//if(content.save.input != undefined) content.input.value = content.save.input;
	
	
	content.btn.onclick = function(event){
		content.save.input[content.save.input.length] = content.input.value;
		content.input.value = "";
		save();
		loadList();
	}
	document.getElementsByClassName("list").onclick = function(){
		console.log("hello");
		this.remove();
	}
	/*
	content.input.onkeydown = function(event){
		content.stuats.innerHTML = "입력중...";
		content.status.classList.remove("text-blue");
		content.status.className += "text-oran";
	}
	*/
	var loadList = (function(){
		content.list.innerHTML = "";
		if(content.save.input != undefined)
		for(i = 0; i < content.save.input.length; i++){
			var li = document.createElement("li");
			li.innerHTML = content.save.input[i];
			li.className = "w12 p5 list";
			content.list.appendChild(li);
		}
	}());
	
	
	
	function save(){
		chrome.storage.sync.set(content.save,function(){
			content.status.innerHTML = "Save Scueess.";
			content.status.classList.remove("text-oran");
			content.status.className += " text-blue";
		});
	}
}