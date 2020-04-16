'use strict'

const express = require('express')
const app = express()
const fs = require("fs");
app.use(express.json());


app.post('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    const title = req.body.title;
    const content = req.body.content;
    fs.writeFileSync(title, content);
    res.end('ok')
})

app.put('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    const title = req.body.title;
    const content = req.body.content;
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      res.end('ok')
    }
    else {
      res.end('post does not exist');
    }
})

app.delete('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    const title = req.params.title;
    fs.unlinkSync(title);
    res.end('ok');
})

app.get('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    const title = req.params.title;
    res.sendfile(title);
})
 
app.listen(3000)

