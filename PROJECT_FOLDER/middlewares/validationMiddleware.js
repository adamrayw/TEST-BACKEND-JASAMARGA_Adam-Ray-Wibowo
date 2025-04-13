const Joi = require('joi');

const employeeSchema = Joi.object({
    nik: Joi.string().required(),
    name: Joi.string().required(),
    is_active: Joi.boolean().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    created_by: Joi.string().optional(),
    updated_by: Joi.string().optional(),

    employee_profile: Joi.object({
        place_of_birth: Joi.string().required(),
        date_of_birth: Joi.date().required(),
        gender: Joi.string().valid('Laki-laki', 'Perempuan').required(),
        is_married: Joi.boolean().required(),
        prof_pict: Joi.string().required(),
        created_by: Joi.string().optional(),
        updated_by: Joi.string().optional()
    }),

    employee_family: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            identifier: Joi.string().optional(),
            job: Joi.string().optional(),
            place_of_birth: Joi.date().optional(),
            date_of_birth: Joi.date().optional(),
            religion: Joi.string().valid("Islam", "Katolik", "Buda", "Protestan", "Konghucu").optional(),
            is_life: Joi.boolean().optional(),
            is_divorced: Joi.boolean().optional(),
            relation_status: Joi.string().valid("Suami", "Istri", "Anak", "Anak Sambung").required()
        })
    ),

    educations: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            level: Joi.string().valid("TK", "Sd", "Smp", "Sma", "Strata 1", "Strata 2", "Doktor", "Profesor").required(),
            description: Joi.string().optional()
        })
    )
})

module.exports = { employeeSchema };