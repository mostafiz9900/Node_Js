const mysql=require('mysql');

const pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'1234',
    database:'abc_crud',
    // port:'3306'
});

let cruddb={};
cruddb.all=()=>{
    return new Promise((resolve, reject)=>{
 let sql="SELECT * FROM student";
 pool.query(sql,(err,results)=>{
    if(err){
        return reject(err);
    }
    return resolve(results);
 })
    });
};
module.exports=cruddb;



// extra code 
// const mysql = require('mysql');

// // Get the Host from Environment or use default
// const host = process.env.DB_HOST || 'localhost';

// // Get the User for DB from Environment or use default
// const user = process.env.DB_USER || 'root';

// // Get the Password for DB from Environment or use default
// const password = process.env.DB_PASS || '';

// // Get the Database from Environment or use default
// const database = process.env.DB_DATABASE || 'twitter_clone';

// // Create the connection with required details
// const con = mysql.createConnection({
//   host, user, password, database,
// });

// const query = "SELECT * FROM tweets";
 
// // make to connection to the database.
// con.connect(function(err) {
//   if (err) throw err;

//   // if connection is successful
//   con.query(query, (err, result, fields) => {
//     // if any error while executing above query, throw error
//     if (err) throw err;

//     // if there is no error, you have the result
//     console.log(result);
//  });
// });