import Modal from 'react-modal';
import { Button } from './Button';

import '../styles/appointmentModal.css'

type NewAppointmentModalProps = {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewAppointmentModal({ isOpen, onRequestClose}:NewAppointmentModalProps){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
        <div className="header-modal">
            <h2 className="title-modal">Agende sua consulta</h2>
            <button
                    className="react-modal-close"
                    type="button"
                    onClick={onRequestClose}
                    
                >
                    X
            </button>
        </div>
        <form className="modal-appointment">
            <label>Genero
                    <select name="gender" id="input-full">
                        <option value="0" ></option>
                        <option value="masculino">Clínico Geral</option>
                        <option value="Feminino">Cardiologia</option>  
                        <option value="Outros">Neurologista</option>   
                    </select></label>
                <div className="double-input">
                    <label>Data da consulta
                        <input type="text" name="dateOfBirth" id="input-mini" /></label>

                    <label>horario
                        <input type="text" name="name" id="input-mini" /></label>
                </div>
            <div className="btn-submit">
                <Button type="submit">Agendar</Button>
            </div>
            
        </form>

        </Modal>
    )
}