const knex = require('../database')
class Patient {
    async create(name, dateOfBirth, address, gender, phone, email) {
        return await knex("patients").insert({name, dateOfBirth, address, gender, phone, email})
    }

    async find(email){
        const res = await knex("patients").select("*").where({ email: email })
        return res[0]
    }

    async findAll(){
        const res = await knex("patients").select("*")
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
            await knex("patients").where({ email: email}).del();
            return {error: false}
        } catch (err) {
            console.log("Patients.delete =>> ", err.message);
            return {error: true}
        }
    }

    async update(email, options){
        try {
            const {newName, newDateOfBirth, newGender, newEmail, newPhone, newAddress} = options;

            let fieldsUp = {}

            if(newName){
                fieldsUp.name = newName;
            }

            if(newDateOfBirth){
                fieldsUp.dateOfBirth = newDateOfBirth;
            }

            if(newGender){
                fieldsUp.gender = newGender;
            }

            if(newEmail){
                fieldsUp.email = newEmail;
                
            }

            if(newPhone){
                fieldsUp.phone = newPhone;
                
            }

            if(newAddress){
                fieldsUp.address = newAddress;
            
            }

            await knex("patients").where({email: email}).update(fieldsUp)
    
            return { success: true }
        } catch (err) {
            console.log("Patients.update =>> ", err.message);
            return { success: false }
        }

    }
}

module.exports = new Patient();