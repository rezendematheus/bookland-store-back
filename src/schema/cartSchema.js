import Joi from "joi";

const cartObjectSchema = Joi.object({
    userId: Joi.string()
        .required(),
    itemId: Joi.string()
        .required()
})

export default cartObjectSchema