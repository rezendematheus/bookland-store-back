import Joi from "joi";

const cartObjectSchema = Joi.object({
    itemId: Joi.string()
        .required()
})

export default cartObjectSchema