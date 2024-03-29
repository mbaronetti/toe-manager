const { Router } = require("express");
const router = Router();
const { getNotes , createNote, deleteNote, getNote, updateNote } = require("../controllers/notesController");

router
  .route("/")
  .get(getNotes)
  .post(createNote);

router
  .route("/:id")
  .get(getNote)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
