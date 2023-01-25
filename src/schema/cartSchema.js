import Joi, { string } from "joi";

const cartObjectSchema = Joi.object({
    userId: string()
        .required(),
    itemId: string()
        .required
})

export default cartObjectSchema