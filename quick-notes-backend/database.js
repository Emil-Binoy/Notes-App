const Database = require("better-sqlite3")

const db = new Database("notes.db")

console.log("db connected")

db.prepare(`
CREATE TABLE IF NOT EXISTS notes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT
)
`).run()

module.exports = db