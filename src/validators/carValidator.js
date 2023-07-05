
import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Бранд має складатися з літер мін 1 мак 20 символів',
        'string.required': 'Це поле є обовя\'язковим'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})
export {
    carValidator
}