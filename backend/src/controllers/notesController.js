const notesCrtl = {};

const Note = require("../models/Note");

notesCrtl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCrtl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author
  });
  await newNote.save();
  res.json({ message: "Note Saved" });
};

notesCrtl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.json(note);
};

notesCrtl.deleteNote = async (req, res) => {
  await Note.findOneAndDelete({ "_id": req.params.id });
  res.json({ message: "Note Deleted" });
};

notesCrtl.updateNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  console.log(req.body)
  await Note.findOneAndUpdate(
    { "_id": req.params.id },
    {
      title,
      author,
      content,
      date
    }
  );
  res.json({ message: "Update Request" });
};

module.exports = notesCrtl;
