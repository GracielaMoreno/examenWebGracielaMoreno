import * as Joi from 'joi';

export const ACTOR_SCHEMA = Joi
    .object().keys({
        id: Joi.number(),
        nombres: Joi.string().required().regex(/^[a-zA-Z]{3,20}$/).min(3).max(20),
        apellidos: Joi.string().required().regex(/^[a-zA-Z]{3,20}$/).min(3).max(20),
        fechaNacimiento: Joi.string().required(),
        numeroPeliculas:Joi.number(),
        retirado:Joi.string(),
    });