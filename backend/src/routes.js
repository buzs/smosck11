const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required(),
    city: Joi.string().required(),
    cep: Joi.string().required().length(9),
    uf: Joi.string().required().length(2),
  })
}), OngController.create)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}), ProfileController.index)


routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentController.delete)


module.exports = routes