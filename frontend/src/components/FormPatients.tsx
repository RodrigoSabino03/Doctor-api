import '../styles/form.css'

export function FormPatients(){
    return(
        <form className="form-patients">
            <div className="form">
                <label>Nome completo</label>
                <input type="text" name="name" id="input-full" />

                <div className="doble-input">
                    <label>Data de nascimento
                    <input type="text" name="dateOfBirth" id="input-mini" /></label>

                    <label>Genero
                    <input type="text" name="gender" id="input-mini" /></label>
                </div>

                <label>Endereço
                <input type="text" name="address" id="input-full" /></label>
                
                <label>Telefone
                <input type="text" name="phone" id="input-full" /></label>

                <label>Email
                <input type="text" name="email" id="input-full" /></label>
            </div>
            <div className="btn-submit">
                <button type="submit">Enviar</button>
            </div>
            
        </form>
    )
}