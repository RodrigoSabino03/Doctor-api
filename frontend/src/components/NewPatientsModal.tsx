import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../services/api';

import '../styles/PatientsModal.css'
import { Button } from './Button';

type NewPatientsModalProps = {
    isOpen: boolean,
    onRequestClose: () => void,
    title: string,
}

export function NewPatientsModal({ isOpen, onRequestClose, title }: NewPatientsModalProps){
    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState('')

    function successfullyCreatedPatient(){
        window.alert("Paciente criado com sucesso")
    }

    function handleCreateNewPatient(e: FormEvent){
        e.preventDefault();

        const patient ={
            name,
            dateOfBirth,
            gender,
            address,
            phone,
            email,
        }

        api.post("/patient", patient)
        successfullyCreatedPatient();

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
            <form onSubmit={handleCreateNewPatient} className="modal-patients">
            <label>Nome completo    
            <input
                type="text"
                id="input-full"
                className="input-modal"
                value={name}
                onChange={e => setName(e.target.value)}
            /></label>
            <div className="double-input">
            <label>Data de nascimento
            <input
                type="text"
                id="input-mini"
                className="input-modal"
                value={dateOfBirth}
                onChange={e => setDateOfBirth(e.target.value)}
            /></label>
            <label>Genero
            <select
                id="input-mini" 
                className="input-modal"
                value={gender}
                onChange={e => setGender(e.target.value)}
                >
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
                value={address}
                onChange={e => setAddress(e.target.value)}
            /></label>
            <label>Telefone
            <input
                type="text"
                id="input-full"
                className="input-modal"
                value={phone}
                onChange={e => setPhone(Number(e.target.value))}
            /></label>
            <label>Email
            <input
                type="text"
                id="input-full"
                className="input-modal"
                value={email}
                onChange={e => setEmail(e.target.value)}
            /></label>

            <Button type="submit">Cadastrar</Button>
            </form>
        </Modal>
    )
}