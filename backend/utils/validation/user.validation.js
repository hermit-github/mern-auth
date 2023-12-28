import Joi from "@hapi/joi";

const signUpSchema = Joi.object({
    name:Joi.string().min(5).max(40).required(),
    email:Joi.string().email().lowercase().required(),
    password:Joi.string().min(6).required()
})

const signInSchema = Joi.object({
    email:Joi.string().email().lowercase().required(),
    password:Joi.string().min(6).required()
})

export {signUpSchema,signInSchema}