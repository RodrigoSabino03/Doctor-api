import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppointmentItem } from "../components/AppointmentItem";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { NewAppointmentModal } from "../components/NewAppointmentModal";

import '../styles/patient.css'

export function Patient(){
    const [isNewAppointmentModal, setIsNewAppointmentModal] = useState(false);

    function handleOpenNewAppointmentModal(){
        setIsNewAppointmentModal(true)
    }
    function handleCloseNewAppointmentModal(){
        setIsNewAppointmentModal(false)
    }

    var history = useHistory();

    function handleAddAppointment(){
        history.push("/createAppointment")
    }
    return(
        <div className="container-patient">
            <Header />
            <div className="content-patient">
                <div className="appointments-section">
                    <div className="appointments-header">
                        <h4>Consultas</h4>
                        <Button onClick={handleOpenNewAppointmentModal}>Novo</Button>
                    </div>
                    <div className="items-appointments">
                        {/* <AppointmentItem /> */}

                    </div>
                </div>
            </div>
            <NewAppointmentModal title="Agende a sua consulta" isOpen={isNewAppointmentModal} onRequestClose={handleCloseNewAppointmentModal} />

        </div>
            


    )
}