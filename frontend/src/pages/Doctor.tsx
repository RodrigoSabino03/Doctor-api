import { useState } from "react";
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import { AppointmentItem } from "../components/AppointmentItem";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { NewAppointmentModal } from "../components/NewAppointmentModal";
import { NewPatientsModal } from "../components/NewPatientsModal";
import { PatientItem } from "../components/PatientItem";

import '../styles/doctor.css'



export function Doctor(){

    const [isNewPatientsModal, setIsNewPatientsModal] = useState(false);
    const [isNewAppointmentModal, setIsNewAppointmentModal] = useState(false);

    function handleOpenNewPatientsModal(){
        setIsNewPatientsModal(true)
    }
    function handleCloseNewPatientsModal(){
        setIsNewPatientsModal(false)
    }
    function handleOpenNewAppointmentModal(){
        setIsNewAppointmentModal(true)
    }
    function handleCloseNewAppointmentModal(){
        setIsNewAppointmentModal(false)
    }

    return(
        <div className="container-doctor">
            <Header />
            <div className="content-doctor">
                <div className="patients-section">
                    <div className="patients-header">
                        <h4>Pacientes</h4>
                        <Button onClick={handleOpenNewPatientsModal}>Novo</Button>
                    </div>
                    <div className="items-patients">
                        <PatientItem />
                        <PatientItem />
                        <PatientItem />
                        <PatientItem />
                    </div>
                </div>
                <div className="appointments-section">
                    <div className="appointments-header">
                        <h4>Consultas</h4>
                        <Button onClick={handleOpenNewAppointmentModal}>Novo</Button>
                    </div>
                    <div className="items-appointments">
                        <AppointmentItem />
                        <AppointmentItem />
                        <AppointmentItem />
                        <AppointmentItem />
                    </div>
                </div>
            </div>
            <NewPatientsModal isOpen={isNewPatientsModal} onRequestClose={handleCloseNewPatientsModal} />
            <NewAppointmentModal isOpen={isNewAppointmentModal} onRequestClose={handleCloseNewAppointmentModal} />
        </div>

        
            


    )
}