import  mysql from 'mysql';


// conncetion to MySQL database

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'redhat@123',
    database: 'real_estate'
});

//connect to database

con.connect((err) => {  
    if (err) {
        console.warn('Error connecting to Database', err);
        return;
    }
    console.warn('Connected');
});

// con.query('select * from users', (err, result) => {
//     console.warn('Result',result);
// });

export default con;