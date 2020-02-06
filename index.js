const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "dist")))

const port = 3000

app.get('*', (req, res)=>{
  res.sendFile(path.join(`${__dirname}/dist/index.html`))
})

app.listen(port, ()=>console.log('listening on port 3000', __dirname))