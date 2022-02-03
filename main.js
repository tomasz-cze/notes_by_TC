const notes = document.querySelector('.notes')
const notesList = document.querySelectorAll('.noteSquare')
const inputTitle = document.querySelector('.title')
const inputText = document.querySelector('textarea')
const inputCategory = document.querySelector('.catOptions')
const popUp = document.querySelector('.popUp')
const popBtnConfirm = document.querySelector('.popUpBtnConfirm')
const popBtnCancel = document.querySelector('.popUpBtnCancel')
const addBtn = document.querySelector('.add')
const clearBtn = document.querySelector('.clearAll')
const delBtns = document.querySelectorAll('.fa-trash-alt')

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


const createNote = () => {
	const noteTitle = inputTitle.value
	const noteText = inputText.value
	const noteCat = inputCategory.value

	const newNote = document.createElement('div')
	newNote.classList.add('noteSquare')
	notes.appendChild(newNote)

	const newNoteTitle = document.createElement('div')
	newNoteTitle.classList.add('noteTitle')
	newNoteTitle.textContent = noteTitle
	newNote.appendChild(newNoteTitle)

	const newNoteText = document.createElement('div')
	newNoteText.classList.add('noteText')
	newNote.appendChild(newNoteText)
	newNoteText.textContent = noteText

	const newBin = document.createElement('i')
	newBin.classList.add('fas','fa-trash-alt')
    newNote.appendChild(newBin)

	if (noteCat === 'Praca') {
		newNote.classList.add('work')
	} else if (noteCat === 'Prywatne') {
		newNote.classList.add('priv')
	} else if (noteCat === 'Inne') {
		newNote.classList.add('others')
	}

	hidePopUp()
	clearPop()
}

popBtnConfirm.addEventListener('click', createNote)
addBtn.addEventListener('click', showPopUp)
popBtnCancel.addEventListener('click', hidePopUp)
delBtns.forEach(el => el.addEventListener('click', deleteNote))
console.log(delBtns);
