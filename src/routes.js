const { Router } = require('express');
const PatientController = require('./controllers/PatientController');

const routes = Router();

routes.post("/patient", PatientController.create)
routes.get("/patient", PatientController.search)
routes.delete("/patient", PatientController.delete)
routes.put("/patient", PatientController.update)

module.exports = { routes };