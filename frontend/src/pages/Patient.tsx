import { useHistory } from "react-router-dom";
import { AppointmentItem } from "../components/AppointmentItem";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import '../styles/patient.css'

export function Patient(){
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
                        <Button onClick={handleAddAppointment}>Novo</Button>
                    </div>
                    <div className="items-appointments">
                        <AppointmentItem />
                        <AppointmentItem />
                        <AppointmentItem />
                        <AppointmentItem />
                    </div>
                </div>
            </div>
        </div>
            


    )
}