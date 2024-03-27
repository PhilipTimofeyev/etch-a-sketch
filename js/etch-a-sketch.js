

const gridContainer = document.querySelector(".container");
const btnSize = document.querySelector(".size");

function createRow(size = 16){
	let rowContainer = document.createElement('div')

	for (let i = 0; i < size; i++) {
	  let rowSquare = document.createElement('div')
	  rowSquare.classList.add("square");
	  rowSquare.addEventListener("mouseover", (event) => myScript(rowSquare));
	  rowContainer.appendChild(rowSquare)
	}
	rowContainer.classList.add("row");

	return rowContainer
}

function createGrid(size = 16){
	for (let i = 0; i < size; i++) {
		gridContainer.appendChild(createRow());
	}
}

function myScript(square) {
	square.style.backgroundColor = 'green';
}

createGrid()

btnSize.addEventListener('click', () => {
  prompt("What size?")
})







