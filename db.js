const mysql=require('mysql2');
const dotenv=require('dotenv');
dotenv.config();

const connection=mysql.createPool({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    database:process.env.DBNAME,
    password:process.env.DBPASS,
    pool:process.env.DBPORT

});

module.exports=connection.promise();