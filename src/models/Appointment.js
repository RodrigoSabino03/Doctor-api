const knex = require('../database')

class Appointment{
    async create(date, schedule, specialty, patient) {
        try {
             await knex("appointments").insert({date, schedule, specialty, patient})
             return {error: false}
        } catch (error) {
            return {error: true}
        }
    }

    async find(date, schedule){
        const res = await knex("appointments").select("*").where({ date: date, schedule: schedule })
        return res
    }

    async findAll(){
        const res = await knex("appointments").select("*")
        return res
    }

    async verify(date, schedule){
        const dateInUSe = await knex("appointments").select("*").where({ date: date});
        if(dateInUSe.length > 0){
            return {exists: true}
        }
        const scheduleInUSe = await knex("appointments").select("*").where({ schedule: schedule });
        if(scheduleInUSe.length > 0){
            return {exists: true}
        }
        return {exists: false}
    }

    async delete(date, schedule){
        try {
            await knex("appointments").where({ date: date, schedule: schedule }).del();
            return {error: false}
        } catch (err) {
            console.log("Appointment.delete =>> ", err.message);
            return {error: true}
        }
    }

    async update(date, schedule, options){
        try {
            const {newDate, newSchedule, newSpecialty, newStatus, newPatient} = options;

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

            if(newPatient){
                fieldsUp.patient = newPatient;
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