const fs = require('fs');
const path = require('path');

// modularized some funcitons for creating an deleting notes.

function createNote(body, notesArr) {
	const note = body;
	notesArr.push(note);
	// adds to json db
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify({ notesArr }, null, 2)
	);
	return note;
}

// extra function used to delete notes and reset json file
//deletes a note from db

function deleteNote(id, notes) {
	let notesArr = notes.filter((element) => {
		if (element.id == id) {
			return false;
		} else {
			return true;
		}
	});

	// this resets note id after deletion
	let index = 0;
	notesArr.forEach((note) => {
		note.id = index;
		index += 1;
	});
	// updates db.json
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify({ notesArr }, null, 2)
	);
	return notesArr;
}

module.exports = {
	createNote,
	deleteNote,
};
