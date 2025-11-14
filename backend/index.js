const {createConnection} = require('mysql2');
const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json());
const cors = require('cors');
app.use(cors());

const connection = createConnection ({
    host: 'localhost',
    user: 'root',
    database: 'ecommerce',
    password: 'printf()'
})

app.get('/', (req, res) => {
    connection.query('SELECT * FROM ecommerce_users', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
})



app.post('/login', (req, res) => {


    const {user_name, user_password, message} = req.body

    const getUserInfo = 'SELECT * FROM ecommerce_users WHERE userName =? and userPassword =?';

    connection.query(getUserInfo, [user_name, user_password], (err, response) => {
        if(err){
            console.log(err)
        }

        if(response.length > 0){
            res.json({
                message: 'ito na frontend',
                user: response[0]
            })
            console.log(response[0])
        }else {
            res.json({
                message: "user not found. create account?"
            })
        }
    })
})



app.listen(PORT, ()=> {
    console.log(`Server running in ${PORT}`)
})

