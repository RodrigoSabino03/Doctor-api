const { Router } = require('express');
const PatientController = require('./controllers/PatientController');
const DoctorController = require('./controllers/DoctorController');
const AppointmentController = require('./controllers/AppointmentController');


const routes = Router();

//patients
routes.post("/patient", PatientController.create)
routes.get("/patient", PatientController.search)
routes.delete("/patient", PatientController.delete)
routes.put("/patient", PatientController.edit)

//doctors
routes.post("/doctor", DoctorController.create)
routes.get("/doctor", DoctorController.search)
routes.delete("/doctor", DoctorController.delete)
routes.put("/doctor", DoctorController.edit)

//appointments
routes.post("/appointment", AppointmentController.create)
routes.get("/appointment", AppointmentController.search)
routes.delete("/appointment", AppointmentController.delete)
routes.put("/appointment", AppointmentController.edit)

module.exports = { routes };