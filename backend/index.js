const {createConnection} = require('mysql2')

const connnection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'printf()',
    database: 'ecommerce'
})

connnection.query('SELECT * FROM ecommerce_users', (err, result, fields) => {
    if(err){
        return console.error(err)
    }

    return console.log(result)
})