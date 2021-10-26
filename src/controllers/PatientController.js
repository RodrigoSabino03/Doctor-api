const Patient = require('../models/Patient')

class PatientController {
    async search(req, res){
        const {email} = req.body;

        const patient = await Patient.find(email)

        return res.status(200).json({patient});

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
        const {email} = req.body;

        // verificar de existe uma conta com o email
        const verifyPatient = await Patient.find(email);

        if(verifyPatient.length < 0){
            return res.status(400).json({message: "user not exists"})
        }

        const patient = await Patient.delete(email);
        return res.status(201).json({message: "user deleted successfully"})



    }
    async update(req, res){
        const {email, newEmail, phone, address} = req.body;

        const verifyPatient = await Patient.find(email);

        if(verifyPatient.length < 0){
            return res.status(400).json({message: "user not exists"})
        }

        const patient = await Patient.update(email, phone, address);
        return res.status(200).json({message: "user updated successfully"})
        
    }
}

module.exports = new PatientController();