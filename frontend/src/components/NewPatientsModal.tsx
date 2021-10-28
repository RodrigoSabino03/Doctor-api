import Modal from 'react-modal';

import '../styles/PatientsModal.css'
import { Button } from './Button';

type NewPatientsModalProps = {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewPatientsModal({ isOpen, onRequestClose }: NewPatientsModalProps){

    

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        
    >

            <div className="header-modal">
            <h2 className="title-modal">Cadastre o paciente</h2>
                <button
                    className="react-modal-close"
                    type="button"
                    onClick={onRequestClose}
                    
                >
                    X
                </button>

                
            </div>
            <form className="modal-patients">
            <label>Nome completo    
            <input
                type="text"
                id="input-full"
                className="input-modal"
            /></label>
            <div className="double-input">
            <label>Data de nascimento
            <input
                type="text"
                id="input-mini"
                className="input-modal"
            /></label>
            <label>Genero
            <select id="input-mini" className="input-modal">
                <option value="0" ></option>
                <option value="masculino">masculino</option>
                <option value="Feminino">Feminino</option>  
                <option value="Outros">Outros</option>   
            </select></label>
            </div>
            <label>Endereço 
            <input
                type="text"
                id="input-full"
                className="input-modal"
            /></label>
            <label>Telefone
            <input
                type="text"
                id="input-full"
                className="input-modal"
            /></label>
            <label>Email
            <input
                type="text"
                id="input-full"
                className="input-modal"
            /></label>

            <Button>Cadastrar</Button>
            </form>
        </Modal>
    )
}