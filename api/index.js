const { Hercai } = require('hercai');
const herc = new Hercai();

const express = require('express')
const index = express()
const port = 3000

index.get('/', (req, res) => {
    res.send('Hello World!')
})

index.get('/bot/:message', (req, res) => {
    herc.question({model:"v3",content:req.params.message}).then(response => {
        res.send(response.reply)
        console.log(response.reply);
        /* The module will reply based on the message! */

    });

})

index.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})