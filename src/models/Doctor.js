const knex = require('../database')

class Doctor{
    async create(name, crm) {
        return await knex("doctors").insert({name, crm})
    }

    async find(crm){
        const res = await knex("doctors").select("*").where({ crm: crm })

        if(res.length === 0){
            return undefined
        }

        return res[0]
    }

    async verify(crm){
        const crmInUSe = await knex("doctors").select("*").where({ crm: crm});
        if(crmInUSe.length > 0){
            return true
        }
        return false
    }
    async delete(crm){
        try {
            const res = await knex("doctors").select("*").where({ crm: crm}).del();
            return {error: false, res}
        } catch (err) {
            console.log("Doctor.delete =>> ", err.message);
            return {error: true}
        }
    }

    async update(crm, options){
        try {
            const { newCrm } = options;

            let fieldsUp = {}

            if(newCrm){
                fieldsUp.crm = newCrm;
            }

            await knex("doctors").where({crm: crm}).update(fieldsUp)

            return { success: true }
        } catch (err) {
            console.log("Appointment.update =>> ", err.message);
            return { success: false }
        }
    }
}

module.exports = new Doctor();