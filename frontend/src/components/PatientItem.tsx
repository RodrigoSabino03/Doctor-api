import '../styles/patientItem.css'

import deleteImg from '../assets/delete.png'
import editImg from '../assets/edit.png'
import { NewPatientsModal } from './NewPatientsModal'
import { useState } from 'react';

type PatientItemProps = {
    name: string,
    dateOfBirth: string,
}


export function PatientItem(props: PatientItemProps){
    const [isEditPatientsModal, setIsEditPatientsModal] = useState(false);

    function handleOpenEditPatientsModal(){
        setIsEditPatientsModal(true)
    }
    function handleCloseEditPatientsModal(){
        setIsEditPatientsModal(false)
    }

    function handleConfirmDelete(){
        if(window.confirm('Are you sure you want to delete')){
            return
        }
    }

    return(
        <div className="item-container">
            <p>{props.name}</p>
            <p>{props.dateOfBirth}</p>

            <div className="buttons">
                <button onClick={handleOpenEditPatientsModal}>
                    <img  src={editImg} alt="editar" />
                </button>
                <button onClick={handleConfirmDelete}>
                    <img  src={deleteImg} alt="lixeira" />
                </button>
            </div>

            <NewPatientsModal title="Edite os dados do paciente" isOpen={isEditPatientsModal} onRequestClose={handleCloseEditPatientsModal} />

        </div>
    )
}