import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

import '../styles/loginDoctor.css'

export function LoginDoctor(){
    const [crmDoctor, setCrmDoctor] = useState('');

    var history = useHistory();

    function handleAuthDoctor(e: FormEvent){
        e.preventDefault();
        console.log({crmDoctor})

        //checkar no banco de dados se existe esse crm

        // se sim, envia prp admin
        //history.push("/doctor")

        //se nao, retona um alert de erro
    }

    return(
        <div className="login-container">
            <Header />
            <h2>Faça login com o seus dados</h2>

            <form onSubmit={handleAuthDoctor}>
                <label>CRM
                    <input
                        type="text"
                        value={crmDoctor}
                        onChange={e => setCrmDoctor(e.target.value)}
                    /></label>
                <Button type="submit">Entrar</Button>
            </form>
        </div>


    )
}