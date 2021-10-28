const knex = require('../database')

class Appointment{
    async create(date, schedule, specialty, status) {
        return await knex("appointments").insert({date, schedule, specialty, status})
    }

    async find(date, schedule){
        const res = await knex("appointments").select("*").where({ date: date, schedule: schedule })
        return res
    }

    // async verify(name, email){
    //     const nameInUSe = await knex("appointments").select("*").where({ name: name});
    //     if(nameInUSe.length > 0){
    //         return {exists: true}
    //     }
    //     const emailInUSe = await knex("appointments").select("*").where({ email: email});
    //     if(emailInUSe.length > 0){
    //         return {exists: true}
    //     }
    //     return {exists: false}
    // }

    async delete(date, schedule){
        try {
            return await knex("appointments").select("*").where({ date: date, schedule: schedule }).del();
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

module.exports = new Appointment();