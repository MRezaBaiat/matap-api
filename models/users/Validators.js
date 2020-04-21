"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importStar(require("../Joi"));
const validator = {
    db: {
        insert: {
            validator: Joi_1.default.alternatives().try(Joi_1.default.object({
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().required(),
                type: Joi_1.default.string().required().allow('DOCTOR'),
                code: Joi_1.default.number().required(),
                price: Joi_1.default.number().required(),
                specialization: require('../specialization/Validators').default.db.update.validator.required(),
                details: Joi_1.default.object().required().keys({
                    city: Joi_1.default.string().required(),
                    nezam_pezeshki_code: Joi_1.default.string().required(),
                    monthlyCut: Joi_1.default.number().required(),
                    clinics: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required()
                }),
            }), Joi_1.default.object({
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().required(),
                type: Joi_1.default.string().required().allow('PATIENT'),
            }))
        },
        update: createValidator_1.default({
            _id: Joi_1.default.string().required(),
            mobile: Joi_1.phone(),
            type: Joi_1.default.string().required().allow('PATIENT', 'DOCTOR'),
            name: Joi_1.default.string().required(),
            code: Joi_1.default.number().optional(),
            imageUrl: Joi_1.default.string().optional(),
            price: Joi_1.default.number().required(),
            specialization: Joi_1.default.string().required(),
            details: Joi_1.default.object().keys({
                city: Joi_1.default.string().required(),
                nezam_pezeshki_code: Joi_1.default.string().required(),
                monthlyCut: Joi_1.default.number().required(),
                clinics: Joi_1.default.array().items(Joi_1.default.string()).required(),
                hospitals: Joi_1.default.array().items(Joi_1.default.string()).required()
            })
        })
    },
    public: {
        post: {
            validator: Joi_1.default.alternatives().try(Joi_1.default.object({
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().required(),
                type: Joi_1.default.string().required().allow('DOCTOR'),
                code: Joi_1.default.number().required(),
                price: Joi_1.default.number().required(),
                specialization: require('../specialization/Validators').default.db.update.validator.required(),
                details: Joi_1.default.object().required().keys({
                    city: Joi_1.default.string().required(),
                    nezam_pezeshki_code: Joi_1.default.string().required(),
                    monthlyCut: Joi_1.default.number().required(),
                    clinics: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required(),
                    hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.db.update.validator).required()
                }),
            }), Joi_1.default.object({
                mobile: Joi_1.phone().required(),
                name: Joi_1.default.string().required(),
                type: Joi_1.default.string().required().allow('PATIENT'),
            }))
        },
        patch: createValidator_1.default({
            _id: Joi_1.default.string().required(),
            mobile: Joi_1.phone(),
            type: Joi_1.default.string().required().allow('PATIENT', 'DOCTOR'),
            name: Joi_1.default.string().required(),
            code: Joi_1.default.number().optional(),
            imageUrl: Joi_1.default.string().optional(),
            price: Joi_1.default.number().optional(),
            specialization: require('../specialization/Validators').default.db.insert.validator.optional(),
            details: Joi_1.default.object().optional().keys({
                city: Joi_1.default.string().required(),
                nezam_pezeshki_code: Joi_1.default.string().required(),
                monthlyCut: Joi_1.default.number().required(),
                clinics: Joi_1.default.array().items(require('../health_center/Validators').default.db.insert.validator.required()).required(),
                hospitals: Joi_1.default.array().items(require('../health_center/Validators').default.db.insert.validator.required()).required()
            })
        })
    },
    signin: createValidator_1.default({
        mobile: Joi_1.default.string().required()
    })
};
exports.default = validator;
