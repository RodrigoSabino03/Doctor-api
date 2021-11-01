const Appointment = require('../models/Appointment')

class AppointmentController{
    async search(req, res){
        const {date, schedule} = req.body;

        const appointment = await Appointment.find(date, schedule)

        return res.status(200).json({appointment});

    }

    async searchAll(req, res){
        const appointments = await Appointment.findAll();
        return res.status(200).json(appointments);
    }
    async create(req, res){
        const { date, schedule, specialty, patient } = req.body;

        if(!date || !schedule || !specialty || !patient){
            return res.status(400).json({ error: "credential is missing" });
        }

        const appointment = await Appointment.verify(date, schedule)

        if(appointment.exists){
            return res.status(400).json({ error: "appointment already exists"})
        }

        const appointmentCreated = await Appointment.create(date, schedule, specialty, patient);

        if(appointmentCreated){
            return res.status(400).json({ error: "appointment created failed"})
        }

        return res.status(201).json({message: "appointment created successfully"})

    }
    async delete(req, res){

        try {
            const {date, schedule} = req.params;
        
            // verificar de existe uma conta com o email
            const verifyAppointment = await Appointment.find(date, schedule);
    
            if(verifyAppointment.length === 0){
                return res.status(400).json({message: "Appointment not exists"})
            }
    
            const response = await Appointment.delete(date, schedule);

            if(response.error){
                return res.status(400).json({ error: "appointment deleted failed"})
            }

            return res.status(200).json({message: "Appointment deleted successfully"})
            
        } catch (err) {
            console.log(err)
        }





    }
    async edit(req, res){
        try {
            const {date, schedule} = req.params;
            const {newDate, newSchedule, newSpecialty, newStatus, newPatient} = req.body
    
            const appointment = await Appointment.find(date, schedule);
    
            if(appointment.length === 0){
                return res.status(404).json({message: "user not exists"})
            }
    
            const fields = {
                newDate,
                newSchedule, 
                newSpecialty, 
                newStatus,
                newPatient
            }
    
            const response = await Appointment.update(date, schedule, fields);
    
            if(!response.success){
                return res.status(500).json({message: "deu ruim "})
            }
    
            return res.status(200).json({message: "deu bom "})
        } catch (err) {
            console.log(err)
        }
        
    }

}

module.exports = new AppointmentController();