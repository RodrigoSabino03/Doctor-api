import Modal from 'react-modal';
import { Button } from './Button';

import '../styles/appointmentModal.css'
import { FormEvent, useState } from 'react';
import { api } from '../services/api';

type NewAppointmentModalProps = {
    isOpen: boolean,
    onRequestClose: () => void,
    title: string,
}

export function NewAppointmentModal({ isOpen, onRequestClose, title}:NewAppointmentModalProps){
    const [date, setDate] = useState('');
    const [schedule, setSchedule] = useState('');
    const [specialty, setSpecialty] = useState('');

    function successfullyCreatedAppointment(){
        window.alert("Paciente criado com sucesso")
    }

    function handleCreateNewAppointment(e: FormEvent) {
        e.preventDefault();

        const appointment = {
            date, 
            schedule, 
            specialty
        }

        api.post("/appointment", appointment)
        successfullyCreatedAppointment();
    }


    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
        <div className="header-modal">
            <h2 className="title-modal">{title}</h2>
            <button
                    className="react-modal-close"
                    type="button"
                    onClick={onRequestClose}
                    
                >
                    X
            </button>
        </div>
        <form onSubmit={handleCreateNewAppointment} className="modal-appointment">
            <label>Genero
                    <select
                        name="specialty" 
                        id="input-full"
                        value={specialty}
                        onChange={e => setSpecialty(e.target.value)}>
                        <option value="0" ></option>
                        <option value="Clínico Geral">Clínico Geral</option>
                        <option value="Cardiologia">Cardiologia</option>  
                        <option value="Neurologista">Neurologista</option>   
                    </select></label>
                <div className="double-input">
                    <label>Data da consulta
                        <input
                            type="text" 
                            name="dateOfBirth" 
                            id="input-mini" 
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        /></label>

                    <label>horario
                        <input 
                            type="text" 
                            name="name" 
                            id="input-mini" 
                            value={schedule}
                            onChange={e => setSchedule(e.target.value)}
                        /></label>
                </div>
            <div className="btn-submit">
                <Button type="submit">Agendar</Button>
            </div>
            
        </form>

        </Modal>
    )
}