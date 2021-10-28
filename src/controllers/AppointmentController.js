const Appointment = require('../models/Appointment')

class AppointmentController{
    async search(req, res){
        const {date, schedule} = req.body;

        const appointment = await Appointment.find(date, schedule)

        return res.status(200).json({appointment});

    }
    async create(req, res){
        const { date, schedule, specialty, status } = req.body;

        if(!date || !schedule || !specialty || !status){
            return res.status(400).json({ error: "credential is missing" });
        }

        // const verification = await Patient.verify(name, email)

        // if(verification.exists){
        //     return res.status(400).json({ error: "user exists"})
        // }

        await Appointment.create(date, schedule, specialty, status);
        return res.status(201).json({message: "appointment created successfully"})

    }
    async delete(req, res){
        const {date, schedule} = req.body;

        // verificar de existe uma conta com o email
        const verifyAppointment = await Appointment.find(date, schedule);

        if(verifyAppointment.length < 0){
            return res.status(400).json({message: "Appointment not exists"})
        }

        await Appointment.delete(date, schedule);
        return res.status(201).json({message: "Appointment deleted successfully"})



    }
    async edit(req, res){
        
    }

}

module.exports = new AppointmentController();