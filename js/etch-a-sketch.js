

const gridContainer = document.querySelector(".container");

function createRow(){
	let rowContainer = document.createElement('div')

	for (let i = 0; i < 16; i++) {
	  let rowSquare = document.createElement('div')
	  rowSquare.classList.add("square");
	  rowSquare.addEventListener("mouseover", (event) => myScript(rowSquare));
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
}

createGrid()





