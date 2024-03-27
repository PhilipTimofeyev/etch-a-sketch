

const gridContainer = document.querySelector(".container");

function createRow(){
	let rowContainer = document.createElement('div')
	for (let i = 0; i < 16; i++) {
	  let rowSquare = document.createElement('div')
	  rowContainer.appendChild(rowSquare)
	}
	return rowContainer
}

function createRows(){
	for (let i = 0; i < 16; i++) {
		gridContainer.appendChild(createRow());
	}
}

createRow()
createRows()

