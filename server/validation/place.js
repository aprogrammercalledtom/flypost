import { Joi } from 'express-validation'

export default {
  createPlace: {
    body: Joi.object({
      accessibilityInfo: Joi.string().required(),
      capacity: Joi.string().required(),
      city: Joi.any().when('mode', { is: 'address', then: Joi.required() }),
      cityCode: Joi.any().when('mode', { is: 'address', then: Joi.required() }),
      country: Joi.any().when('mode', { is: 'address', then: Joi.required() }),
      description: Joi.string().min(20).required(),
      disabledSlots: Joi.array().items(Joi.number()).required(),
      images: Joi.array(),
      isPublic: Joi.boolean().required(),
      latitude: Joi.number().when('mode', { is: 'gps', then: Joi.required() }),
      longitude: Joi.number().when('mode', { is: 'gps', then: Joi.required() }),
      mode: Joi.string().allow('gps', 'address', 'virtual').required(),
      slotSize: Joi.number().min(1).max(1440).required(),
      street: Joi.any().when('mode', { is: 'address', then: Joi.required() }),
      title: Joi.string().min(3).required(),
    }),
  },
  updatePlace: {
    body: Joi.object({
      capacity: Joi.string().required(),
      city: Joi.any().when('mode', { is: 'address', then: Joi.required() }),
      cityCode: Joi.any().when('mode', { is: 'address', then: Joi.required() }),
      country: Joi.any().when('mode', { is: 'address', then: Joi.required() }),
      description: Joi.string().min(20).required(),
      disabledSlots: Joi.array().items(Joi.number()).required(),
      images: Joi.array(),
      isPublic: Joi.boolean().required(),
      latitude: Joi.number().when('mode', { is: 'gps', then: Joi.required() }),
      longitude: Joi.number().when('mode', { is: 'gps', then: Joi.required() }),
      mode: Joi.string().allow('gps', 'address', 'virtual').required(),
      street: Joi.any().when('mode', { is: 'address', then: Joi.required() }),
      title: Joi.string().min(3).required(),
    }),
    params: Joi.object({
      resourceSlug: Joi.string().required(),
    }),
  },
}
