const express = require('express')
const app = express()

const controller = require('./Controllers/controller')

app.use(express.json())

app.get('/api/guns', controller.read)
app.post('/api/guns', controller.create)
app.put('/api/guns/:id', controller.update)
app.delete('/api/guns/:id', controller.delete)




const port = 4005
app.listen(port, () => console.log(`listening on port ${port}`))