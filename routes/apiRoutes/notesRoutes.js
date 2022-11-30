const router = require('express').Router();

// importing functions from noteMods
const { createNote, deleteNote } = require('../../lib/noteMods');
// using json db to store notes
let { notesArr } = require('../../db/db.json');

// get route

router.get('/notes', (req, res) => {
	let results = notesArr;
	res.json(results);
});

// post route
router.post('/notes', (req, res) => {
	if (notesArr) {
		req.body.id = notesArr.length.toString();
	} else {
		req.body.id = 0;
	}
	res.json(createNote(req.body, notesArr));
});

// delete route

router.delete('/notes/:id', async (req, res) => {
	const { id } = req.params;
	notesArr = await deleteNote(id, notesArr);
	res.json(notesArr);
});

module.exports = router;
