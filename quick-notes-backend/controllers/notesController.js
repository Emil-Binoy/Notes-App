const db = require("../database");

const getNotes = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM notes WHERE user_id=$1 ORDER BY id DESC", [
      req.user.id,
    ]);

    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addNote = async (req, res) => {
  try {
    if (!req.body.text) {
      return res.status(400).json({
        message: "string is empty",
      });
    }

    const result = await db.query(
      `
            INSERT INTO notes(
            text,
            user_id
            )

            VALUES($1,$2)

            RETURNING *
            `,

      [req.body.text, req.user.id],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteNote = async (req, res) => {
  try {
    await db.query(
      "DELETE FROM notes WHERE id=$1 AND user_id=$2",

      [req.params.id, req.user.id],
    );

    res.json({
      message: "note deleted",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateNote = async (req, res) => {
  try {
    const text = req.body.text;

    if (!text) {
      return res.status(400).json({
        message: "text required",
      });
    }

    await db.query(
      "UPDATE notes SET text=$1 WHERE id=$2 AND user_id=$3",

      [text, req.params.id, req.user.id],
    );

    res.json({
      message: "note updated",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getNotes,
  addNote,
  deleteNote,
  updateNote,
};
