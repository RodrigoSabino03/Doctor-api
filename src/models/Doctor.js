const knex = require('../database')

class Doctor{
    async create(name, crm) {
        return await knex("doctors").insert({name, crm})
    }

    async find(crm){
        const res = await knex("doctors").select("*").where({ crm: crm })
        return res
    }

    async verify(crm){
        const crmInUSe = await knex("doctors").select("*").where({ crm: crm});
        if(crmInUSe.length > 0){
            return {exists: true}
        }
        return {exists: false}
    }
    async delete(crm){
        try {
            return await knex("doctors").select("*").where({ crm: crm}).del();
        } catch (err) {
            console.log("Doctor.delete =>> ", err.message);
        }
    }
    async update(){
        try {
            return { success: true }
        } catch (err) {
            console.log("Patients.update =>> ", err.message);
            return { success: false }
        }

    }

}

module.exports = new Doctor();