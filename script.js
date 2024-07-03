const addButton = document.getElementById("addNotebtn");
const container = document.getElementById("container");
const note = document.getElementById("note");
const noteContent = document.getElementById("noteContent");


document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById("addNotebtn");
    const container = document.getElementById("container");

    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    savedNotes.forEach(noteText => addNoteToDOM(noteText));

    addButton.addEventListener("click", function() {
        addNoteToDOM('');
    });

    function addNoteToDOM(noteText) {
        let newNote = document.createElement('div');
        newNote.className = 'note';
        let newNoteContent = document.createElement('input');
        newNoteContent.type = 'text';
        newNoteContent.value = noteText;
        newNoteContent.placeholder = 'write a note...';
        newNoteContent.addEventListener('input', saveNotes);

        let deleteBtn = document.createElement('img');
        deleteBtn.src = 'icons8-delete-document-50.png';
        deleteBtn.alt = 'Delete';
        deleteBtn.addEventListener('click', function() {
            newNote.remove();
            saveNotes();
        });

        newNote.appendChild(newNoteContent);
        newNote.appendChild(deleteBtn);
        container.appendChild(newNote);
    }

    function saveNotes() {
        const notes = Array.from(document.querySelectorAll('.note input')).map(noteInput => noteInput.value);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
});