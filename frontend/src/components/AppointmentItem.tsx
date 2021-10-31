import { ReactNode, useState } from 'react';
import { api } from '../services/api';

import deleteImg from '../assets/delete.png'
import editImg from '../assets/edit.png'
import { NewAppointmentModal } from './NewAppointmentModal';

type AppointmentItemProps = {
    specialty: string,
    date: string,
    schedule: string,
    status: ReactNode
}


export function AppointmentItem(props: AppointmentItemProps){
    const [isEditAppointmentModal, setIsEditAppointmentModal] = useState(false);
    function handleConfirmDelete(){
        if(!window.confirm('Are you sure you want to delete')){
            return 
        }

        api.delete(`/appointment/${props.date}/${props.schedule}`)
        .then( res => {
            console.log(res)


        })
        
    }

    function handleCheckedStatus(){
        api.put(`/appointment/${props.date}/${props.schedule}`, {newStatus: "Executado"})
  
    }



    function handleOpenEditAppointmentModal(){
        setIsEditAppointmentModal(true)
    }
    function handleCloseEditAppointmentModal(){
        setIsEditAppointmentModal(false)
    }

    
    return(
        <div className="item-container">
            <p>{props.specialty}</p>
            <p>{props.date}</p>
            <p>{props.schedule}</p>
            <button className="btn-status"onClick={handleCheckedStatus}>
                <p>{props.status}</p>
            </button>

            <button onClick={handleOpenEditAppointmentModal}>
                <img  src={editImg} alt="editar" />
            </button>

            <button onClick={handleConfirmDelete}>
                <img  src={deleteImg} alt="lixeira" />
            </button>

            <NewAppointmentModal title="Edite os dados da consulta" isOpen={isEditAppointmentModal} onRequestClose={handleCloseEditAppointmentModal} />

        </div>
    )
}