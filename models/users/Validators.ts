import createValidator from '../createValidator';
import Joi, {phone} from '../Joi';
import {GeneratedValidator} from '../Validator';
import User from './User';


const validator : GeneratedValidator<User> = {
  db:{
    insert:createValidator({
        mobile:phone(),
        type:Joi.string().required().allow('PATIENT','DOCTOR'),
        name:Joi.string().required(),
        code:Joi.number().optional(),
        imageUrl:Joi.string().optional(),
        price:Joi.number().required(),
        specialization:require('../specialization/Validators').default.db.insert.validator.required(),
        details:Joi.object().keys({
            city:Joi.string().required(),
            nezam_pezeshki_code:Joi.string().required(),
            monthlyCut:Joi.number().required(),
            clinics:Joi.array().items(require('../health_center/Validators').default.db.insert.validator.required),
            hospitals:Joi.array().items(require('../health_center/Validators').default.db.insert.validator.required)
        })
    }),
      update:createValidator({
          _id:Joi.string().required(),
          mobile:phone(),
          type:Joi.string().required().allow('PATIENT','DOCTOR'),
          name:Joi.string().required(),
          code:Joi.number().optional(),
          imageUrl:Joi.string().optional(),
          price:Joi.number().required(),
          specialization:require('../specialization/Validators').default.db.insert.validator.required(),
          details:Joi.object().keys({
              city:Joi.string().required(),
              nezam_pezeshki_code:Joi.string().required(),
              monthlyCut:Joi.number().required(),
              clinics:Joi.array().items(require('../health_center/Validators').default.db.insert.validator.required),
              hospitals:Joi.array().items(require('../health_center/Validators').default.db.insert.validator.required)
          })
      })
  },
  public:{
      post:createValidator({
          mobile:phone(),
          name:Joi.string().required()
      }),
      put:createValidator({
          _id:Joi.string().required(),
          mobile:phone(),
          type:Joi.string().required().allow('PATIENT','DOCTOR'),
          name:Joi.string().required(),
          code:Joi.number().optional(),
          imageUrl:Joi.string().optional(),
          price:Joi.number().required(),
          specialization:require('../specialization/Validators').default.db.insert.validator.required(),
          details:Joi.object().keys({
              city:Joi.string().required(),
              nezam_pezeshki_code:Joi.string().required(),
              monthlyCut:Joi.number().required(),
              clinics:Joi.array().items(require('../health_center/Validators').default.db.insert.validator.required),
              hospitals:Joi.array().items(require('../health_center/Validators').default.db.insert.validator.required)
          })
      })
  },
    signin:createValidator({
        mobile:Joi.string().required()
    })
};

export default validator;

