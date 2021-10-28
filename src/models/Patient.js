const knex = require('../database')
class Patient {
    async create(name, dateOfBirth, address, gender, phone, email) {
        return await knex("patients").insert({name, dateOfBirth, address, gender, phone, email})
    }

    async find(email){
        const res = await knex("patients").select("*").where({ email: email })
        return res
    }

    async verify(name, email){
        const nameInUSe = await knex("patients").select("*").where({ name: name});
        if(nameInUSe.length > 0){
            return {exists: true}
        }
        const emailInUSe = await knex("patients").select("*").where({ email: email});
        if(emailInUSe.length > 0){
            return {exists: true}
        }
        return {exists: false}
    }

    async delete(email){
        try {
            return await knex("patients").select("*").where({ email: email}).del();
        } catch (err) {
            console.log("Patients.delete =>> ", err.message);
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

module.exports = new Patient();