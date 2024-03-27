

const container = document.querySelector(".container");
const btnSize = document.querySelector(".size");

function createRow(size = 16){
	let rowContainer = document.createElement('div')

	for (let i = 0; i < size; i++) {
	  let rowSquare = document.createElement('div')
	  rowSquare.classList.add("square");
	  rowSquare.addEventListener("mouseover", (event) => squareColor(rowSquare));
	  rowContainer.appendChild(rowSquare)
	}
	rowContainer.classList.add("row");

	return rowContainer
}

function createGrid(size = 16){
	let gridContainer = document.createElement("div");
	gridContainer.classList.add("gridContainer");


	for (let i = 0; i < size; i++) {
		gridContainer.appendChild(createRow(size));
	}
	container.appendChild(gridContainer)
}

function squareColor(square) {
	square.style.backgroundColor = generateRandomColor()
}

function generateRandomColor() {
	randomColor = Math.floor(Math.random()*16777215).toString(16);
	return "#" + randomColor
}

function getSize() {
	let userSize

	while (true) {
		userSize = prompt("Please enter a number between 1 and 100 for the size of the grid");
		if (Number(userSize) <= 100) {break}
	}
	return userSize
}

function changeSize() {
	btnSize.addEventListener('click', () => {
	  userSize = getSize();
	  const gridContainer = document.querySelector(".gridContainer");
	  container.removeChild(gridContainer);
	  createGrid(userSize)
	})
}

createGrid()
changeSize()





