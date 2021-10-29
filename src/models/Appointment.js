const knex = require('../database')

class Appointment{
    async create(date, schedule, specialty) {
        return await knex("appointments").insert({date, schedule, specialty})
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

    async update(date, schedule, options){
        try {
            const {newDate, newSchedule, newSpecialty, newStatus} = options;

            let fieldsUp = {}

            if(newDate){
                fieldsUp.date = newDate;
            }

            if(newSchedule){
                fieldsUp.schedule = newSchedule;
                
            }

            if(newSpecialty){
                fieldsUp.specialty = newSpecialty;
            
            }
            if(newStatus){
                fieldsUp.status = newStatus;
            
            }


            await knex("appointments").where({date: date, schedule: schedule}).update(fieldsUp)

    
            return { success: true }
        } catch (err) {
            console.log("Appointment.update =>> ", err.message);
            return { success: false }
        }

    }

}

module.exports = new Appointment();