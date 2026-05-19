const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./notes.db', (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("db connected")
    }
})

db.run(`
CREATE TABLE IF NOT EXISTS notes(
id INTEGER PRIMARY KEY AUTOINCREMENT,
text TEXT
)
`)

module.exports=db;