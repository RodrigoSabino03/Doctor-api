const Patient = require('../models/Patient')

class PatientController {
    async search(req, res){
        const {email} = req.params;

        const patient = await Patient.find(email)

        return res.status(200).json(patient);

    }

    async searchAll(req, res){
        const patients = await Patient.findAll();
        return res.status(200).json(patients);

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

        await Patient.create(name, dateOfBirth, address, gender, phone, email);
        return res.status(201).json({message: "user created successfully"})

    }
    async delete(req, res){
        const {email} = req.params;

        // verificar de existe uma conta com o email
        const verifyPatient = await Patient.find(email);

        if(verifyPatient.length === 0){
            return res.status(400).json({message: "user not exists"})
        }

        await Patient.delete(email);
        return res.status(201).json({message: "user deleted successfully"})



    }
    async edit(req, res){
        const {email} = req.params;
        const {newAddress, newPhone, newEmail} = req.body

        const patient = await Patient.find(email);

        if(patient.length === 0){
            return res.status(404).json({message: "user not exists"})
        }

        const fields = {
            newAddress,
            newPhone, 
            newEmail
        }

        const response = await Patient.update(email, fields);

        if(!response.success){
            return res.status(500).json({message: "deu ruim "})
        }

        return res.status(200).json({message: "deu bom "})
        
        
    }
}

module.exports = new PatientController();