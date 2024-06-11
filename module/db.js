var mysql = require('mysql');
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'WEB208'
});
connection.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = connection;