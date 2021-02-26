// Fantasmino GIGI counter

let counter = 0;

// event listener fo increase and decrease

document.querySelector("#increase").addEventListener("click",()=>{
	count(1);
});
document.querySelector("#decrease").addEventListener("click",()=>{
	count(-1);
});

// check if arrived at the end

function count(n) {
	if (counter >= 3 || counter <= -3) {
		display();
}
	counter += n;
	
	document.getElementById("number").innerHTML = counter; 
}

// final counter buttons

document.querySelector("#top").addEventListener("click",()=>{
	location.reload();
});
document.querySelector("#end").addEventListener("click",()=>{
	location.reload();
});

function display() {
	document.getElementById("top").style.display = "block";
	document.getElementById("number").style.display = "none";
	document.getElementById("title").style.display = "none";
}