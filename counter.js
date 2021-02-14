// Fantasmino GIGI counter

let a = 0;

// event listener fo increase and decrease

document.querySelector("#increase").addEventListener("click",()=>{
  count(1);
});
document.querySelector("#decrease").addEventListener("click",()=>{
  count(-1);
});

// check if arrived at the end

function count(n) {
	if (a >= 3) {
		display();
}
	if (a <= -3) {
		display(); 
}
	if (n == 1) {
	  a = a + 1;
	} else {
	  a = a - 1; 
	}
	document.getElementById("number").innerHTML = a; 
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