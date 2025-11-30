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


app.post('/signup', (req, res)=> {
    const {usernameInput, firstnameInput, lastnameInput, passwordInput} = req.body
    const checkUser = 'Select * FROM ecommerce_users WHERE userName = ?'
    const addUser = 'INSERT INTO ecommerce_users (userName, firstName, lastName, userPassword) VALUES (?, ?, ?, ?)'

    connection.query(checkUser, [usernameInput], (err, checkUserResponse) => {
        if(err){
            console.log( 'Checking dup user error: ' + err)
        }

        if(checkUserResponse.length > 0){
            return res.json({
                message: 'User Already Exist',
                success: "Failed"
            })
        }else{
            connection.query(addUser, [usernameInput, firstnameInput, lastnameInput, passwordInput], (err, addUserResponse)=>{
                if(err){
                    return res.json({
                        message: 'Error in adding user'
                    })
                }
                res.json({
                    message: 'Successful adding new user. USERNAME:' + usernameInput,
                    success: "Success"
                })
            })
        }
    })

})


app.post('/login', (req, res) => {

    const {user_name, user_password, message} = req.body
    console.log(user_name)
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


app.put('/update', (req, res) => {
    const {message, prevUsername, userName, userPassword} = req.body;
    console.log(prevUsername);
    console.log(userName)
    const updateUser = 'UPDATE ecommerce_users SET userName = ?, userPassword = ? where userName = ?'



    connection.query(updateUser, [userName, userPassword, prevUsername], (err, response) => {
        if(err){
            console.log(err)
        }

        if(response.affectedRows > 0){

            const getUser = 'Select * From ecommerce_users where userName = ?'

            connection.query(getUser, [userName], (err, row) => {
                if(err){
                    console.log(err)
                }

                res.json({
                    message: 'success',
                    user: row[0]
                })
            })

        }else {
            console.log('error toy')
        }

    })
})


app.get('/watches', (req, res) => {
    const { message } = req.query;
    console.log(message);

    const getWatches = 'Select watch_brand FROM watches';

    connection.query(getWatches, (err, response)=> {
        
        if(err){
            console.log(err)
        }

        res.json({
           watches_brand: response
        })
    })


});

app.post('/billing', (req, res)=> {
    const {message, userNumber, userAddress} = req.body;

    console.log(userNumber)
})


app.listen(PORT, ()=> {
    console.log(`Server running in ${PORT}`)
})

