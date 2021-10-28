const Doctor = require('../models/Doctor')

class DoctorController{
    async create(req, res){
        const { name, crm } = req.body;

        if(!name || !crm){
            return res.status(400).json({ error: "credential is missing" });
        }

        const verification = await Doctor.verify(crm)

        if(verification.exists){
            return res.status(400).json({ error: "user exists"})
        }

        await Doctor.create(name, crm);
        return res.status(201).json({message: "user created successfully"})

    }

    async search(req, res){
        const {crm} = req.body;

        const doctor = await Doctor.find(crm)

        return res.status(200).json({doctor});

    }
    async delete(req, res){
        const {crm} = req.body;

        // verificar de existe uma conta com o email
        const verifyDoctor = await Doctor.find(crm);

        if(verifyDoctor.length < 0){
            return res.status(400).json({message: "user not exists"})
        }

        await Doctor.delete(crm);
        return res.status(201).json({message: "user deleted successfully"})
    }
    async edit(req, res){
        
    }
}

module.exports = new DoctorController();