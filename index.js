const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
})

const port = 8080

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running http://0.0.0.0:${port}`);
})
