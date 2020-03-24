const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        event: 'Semana OminiStack 11'
    })
})

app.listen(3333);