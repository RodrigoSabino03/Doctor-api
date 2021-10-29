import { useState } from 'react';
import deleteImg from '../assets/delete.png'

export function AppointmentItem(){
    const [status, setStatus] = useState("Pendente");
    const [colorStatus, setColorStatus] = useState("yellow");
    function handleConfirmDelete(){
        if(!window.confirm('Are you sure you want to delete')){
            return
        }
    }

    function handleCheckedStatus(){

        setStatus("Executado")
        setColorStatus("green")
    }
    return(
        <div className="item-container">
            <p>Especialidade</p>
            <p>30/07/2001</p>
            <p>13:00h</p>
            <button onClick={handleCheckedStatus}>
                <p id={colorStatus}>{status}</p>
            </button>

            <button onClick={handleConfirmDelete}>
                <img  src={deleteImg} alt="lixeira" />
            </button>
        </div>
    )
}