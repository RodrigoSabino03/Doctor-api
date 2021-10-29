import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function LoginPatient(){
    const [emailPatient, setEmailPatient] = useState('')
    
    var history = useHistory();

    function handleAuthPatient(e: FormEvent){
        e.preventDefault();
        console.log({emailPatient})

        //checkar no banco de dados se existe esse email


        // se sim, envia pro admin
            //history.push("/patient")

        //se nao, retona um alert de erro
    }
    
    return(
        <div className="login-container">
            <Header />
            <h2>Faça login com o seus dados</h2>
            <form onSubmit={handleAuthPatient}>
                <label>Email
                    <input 
                        type="text"
                        value={emailPatient}
                        onChange={e => setEmailPatient(e.target.value)}
                        
                    /></label>
                <Button type="submit">Entrar</Button>
            </form>
        </div>
    
    
    )
    
}