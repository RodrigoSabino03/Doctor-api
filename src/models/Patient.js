const knex = require('../database')
class Patient {
    async create(name, dateOfBirth, address, gender, phone, email) {
        return await knex("patients").insert({name, dateOfBirth, address, gender, phone, email})
    }

    async find(name){
        const res = await knex("patients").select("*").where({ name: name })

        return res[0]
    }

    async verify(name, email){
        const nameInUSe = await knex("patients").select("*").where({ name: name});
        if(nameInUSe.length > 0){
            return {exists: true}
        }
        const emailInUSe = await knex("patients").select("*").where({ email: email});
        if(nameInUSe.length > 0){
            return {exists: true}
        }

        return {exists: false}
    }

    async delete(name){
        
    }
}

module.exports = new Patient();