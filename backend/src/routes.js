const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        event: 'Semana OminiStack 11'
    })
})

module.exports = routes