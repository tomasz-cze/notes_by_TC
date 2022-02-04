let notes
let notesList
let inputTitle
let inputText
let inputCategory
let popUp
let popBtnConfirm
let popBtnCancel
let addBtn
let clearBtn
let delBtns

const main = () => {
	prepDOMElements()
	prepDOMEvents()
}

const addNote = () => {
	createNote()
	clearPop()
	hidePopUp()
	prepDOMElements()
	delBtns.forEach(el => el.addEventListener('click', deleteNote))
}
const createNote = () => {
	prepDOMEvents()
	const noteTitle = inputTitle.value
	const noteText = inputText.value
	const noteCat = inputCategory.value

	const newNote = document.createElement('div')
	newNote.classList.add('noteSquare')
	notes.append(newNote)

	const newNoteTitle = document.createElement('div')
	newNoteTitle.classList.add('noteTitle')
	newNoteTitle.textContent = noteTitle
	newNote.append(newNoteTitle)

	const newNoteText = document.createElement('div')
	newNoteText.classList.add('noteText')
	newNote.append(newNoteText)
	newNoteText.textContent = noteText

	const newBin = document.createElement('i')
	newBin.classList.add('fas', 'fa-trash-alt')
	newNote.append(newBin)

	if (noteCat === 'Praca') {
		newNote.classList.add('work')
	} else if (noteCat === 'Prywatne') {
		newNote.classList.add('priv')
	} else if (noteCat === 'Inne') {
		newNote.classList.add('others')
	}

}

const showPopUp = () => {
	popUp.classList.remove('hide')
}
const hidePopUp = () => {
	popUp.classList.add('hide')
}
const deleteNote = e => {

	e.target.closest('.noteSquare').remove()
}
const clearPop = () => {
	inputTitle.value = ''
	inputText.value = ''
	inputCategory.value = ''
}

const prepDOMElements = () => {
	delBtns = document.querySelectorAll('.fa-trash-alt')
	notes = document.querySelector('.notes')
	notesList = document.querySelectorAll('.noteSquare')
	inputTitle = document.querySelector('.title')
	inputText = document.querySelector('textarea')
	inputCategory = document.querySelector('.catOptions')
	popUp = document.querySelector('.popUp')
	popBtnConfirm = document.querySelector('.popUpBtnConfirm')
	popBtnCancel = document.querySelector('.popUpBtnCancel')
	addBtn = document.querySelector('.add')
	clearBtn = document.querySelector('.clearAll')
}
const prepDOMEvents = () => {
	popBtnConfirm.addEventListener('click', addNote)
	addBtn.addEventListener('click', showPopUp)
	popBtnCancel.addEventListener('click', hidePopUp)
}

document.addEventListener('DOMContentLoaded', main)



