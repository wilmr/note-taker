const router = require('express').Router();

const { createNote, deleteNote } = require('../../lib/noteMods');
let { notesArr } = require('../../db/db.json');

router.get('/notes', (req, res) => {
	let results = notesArr;
	res.json(results);
});

router.post('/notes', (req, res) => {
	if (notesArr) {
		req.body.id = notesArr.length.toString();
	} else {
		req.body.id = 0;
	}
	res.json(createNote(req.body, notesArr));
});

router.delete('/notes/:id', async (req, res) => {
	const { id } = req.params;
	notesArr = await deleteNote(id, notesArr);
	res.json(notesArr);
});

module.exports = router;
