const Patient = require('../models/Patient')

class PatientController {
    async search(req, res){
        const {name, email} = req.body;

        const verification = await Patient.verify(name, email);

        if(verification.exists){
            return res.status(400).json({ error: "user not found" });
        }

        const patient = await Patient.find(name)


        return res.status(200).json(console.log(patient));

    }
    async create(req, res){
        const { name, dateOfBirth, address, gender, phone, email } = req.body;

        if(!name || !dateOfBirth || !address || !gender || !phone || !email){
            return res.status(400).json({ error: "credential is missing" });
        }

        const verification = await Patient.verify(name, email)

        if(verification.exists){
            return res.status(400).json({ error: "user exists"})
        }

        const patient = await Patient.create(name, dateOfBirth, address, gender, phone, email);
        return res.status(201).json({message: "user created successfully"})

    }
    async delete(req, res){

    }
    async update(req, res){
        
    }
}

module.exports = new PatientController();