import { Joi } from 'express-validation'

export default {
  signup: {
    body: Joi.object({
      email: Joi.string().email().required(),
      username: Joi.string().min(3).max(30).required(),
      password: Joi.string().min(8).required(),
      paymentMethod: Joi.string().allow('paypal', 'transfer').required(),
    }),
  },
}
