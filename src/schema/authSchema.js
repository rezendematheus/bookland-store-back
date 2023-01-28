import joi from 'joi';

const singUpSchema= joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});

const singInSchema= joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export {singUpSchema, singInSchema};