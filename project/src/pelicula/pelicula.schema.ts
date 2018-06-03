import *as Joi from 'joi';
export const PELICULA_SCHEMA=Joi.object().keys({

    identificadorPelicula:Joi.number(),
    nombre:Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
    anioLanzamiento:Joi.number().required().min(4).max(4),
    rating: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
    actoresPrincipales: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30),
    sinopsis: Joi.string().required().regex(/^[a-zA-Z]{3,30}$/).min(3).max(100),
    actorId:Joi.number().required()


});
