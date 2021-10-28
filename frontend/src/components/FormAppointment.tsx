import '../styles/form.css'
import { Button } from './Button'

export function FormAppointment(){
    return(
        <form className="form-patients">
            <div className="form">
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
            </div>
            <div className="btn-submit">
                <Button type="submit">Agendar</Button>
            </div>
            
        </form>
    )
}