

const gridContainer = document.querySelector(".container");

function createRow(){
	let rowContainer = document.createElement('div')
	for (let i = 0; i < 16; i++) {
	  let rowSquare = document.createElement('div')
	  rowSquare.classList.add("square");
	  rowContainer.appendChild(rowSquare)
	}
	rowContainer.classList.add("row");
	return rowContainer
}

function createGrid(){
	for (let i = 0; i < 16; i++) {
		gridContainer.appendChild(createRow());
	}
}

function myScript(square) {
	square.style.backgroundColor = 'green';
	// console.log("lol")
}

createGrid()





