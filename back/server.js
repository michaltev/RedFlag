const express = require('express')
const cors = require('cors')

/*const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'admin',
    database : 'festivematch'
  }
});*/

var app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	console.log('getting');
	res.json('getting');
});

app.listen(3000, () => {
	console.log('app is running');
})