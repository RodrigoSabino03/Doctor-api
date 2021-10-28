import '../styles/patientItem.css'

import deleteImg from '../assets/delete.png'

export function PatientItem(){

    function handleConfirmDelete(){
        if(window.confirm('Are you sure you want to delete')){
            return
        }
    }

    return(
        <div className="item-container">
            <p>rodrigo sabino de menezes</p>
            <p>30/07/2001</p>
            <button onClick={handleConfirmDelete}>
                <img  src={deleteImg} alt="lixeira" />
            </button>
        </div>
    )
}