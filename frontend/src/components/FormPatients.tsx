import { FormEvent, useState } from 'react';
import '../styles/form.css'
import { Button } from './Button'

type PatientProps = {
    name: string,
    dateOfBirth: string,
    gender: string,
    address: string,
    phone: string,
    email: string,
}

export function FormPatients(props: PatientProps){
    const [patient, setPatient] = useState({});

    function handleCreatePatients(e: FormEvent){
        e.preventDefault();




    }

    return(
        <form className="form-patients">
            <div className="form">
                <label>Nome completo</label>
                <input type="text" name="name" id="input-full" />

                <div className="double-input">
                    <label>Data de nascimento
                    <input type="text" name="dateOfBirth" id="input-mini" /></label>

                    <label>Genero
                    <select name="gender" id="input-mini">
                        <option value="0" ></option>
                        <option value="masculino">masculino</option>
                        <option value="Feminino">Feminino</option>  
                        <option value="Outros">Outros</option>   
                    </select></label>
                </div>

                <label>Endereço
                <input type="text" name="address" id="input-full" /></label>
                
                <label>Telefone
                <input type="text" name="phone" id="input-full" /></label>

                <label>Email
                <input type="text" name="email" id="input-full" /></label>
            </div>
            <div className="btn-submit">
                <Button onSubmit={handleCreatePatients} type="submit">Enviar</Button>
            </div>
            
        </form>
    )
}