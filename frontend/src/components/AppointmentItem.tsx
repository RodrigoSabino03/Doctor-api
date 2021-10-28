import deleteImg from '../assets/delete.png'

export function AppointmentItem(){
    function handleConfirmDelete(){
        if(window.confirm('Are you sure you want to delete')){
            return
        }
    }
    return(
        <div className="item-container">
            <p>Especialidade</p>
            <p>30/07/2001</p>
            <p>13:00h</p>
            <p>status</p>
            <button onClick={handleConfirmDelete}>
                <img  src={deleteImg} alt="lixeira" />
            </button>
        </div>
    )
}