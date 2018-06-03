import *as Joi from 'joi';
export const PELICULA_SCHEMA=Joi.object().keys({

    identificadorPelicula:Joi.number(),
    nombre:Joi.string().required().regex(/^[a-zA-Z]{3,20}$/).min(3).max(50),
    anioLanzamiento:Joi.number().required().min(4).max(4),
    rating: Joi.string().required().regex(/^[a-zA-Z]{3,20}$/).min(3).max(50),
    actoresPrincipales: Joi.string().required().regex(/^[a-zA-Z]{3,50}$/).min(3).max(50),
    sinopsis: Joi.string().required().regex(/^[a-zA-Z]{3,100}$/).min(3).max(100),
    actorId:Joi.number().required()


});
