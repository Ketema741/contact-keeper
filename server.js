const express  = require('express')

const app = express()

app.get('/', (req, res) => {res.json({'msg':'hello'})})

const PORT = process.env.PORT || 5000

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

app.listen(PORT, ()=>{console.log(`server started at port: ${PORT}`)})