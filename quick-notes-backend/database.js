const { Pool } = require("pg")

const db = new Pool({

    connectionString:
    process.env.DATABASE_URL,

    ssl:{
        rejectUnauthorized:false
    }

})

console.log("db connected")

module.exports=db