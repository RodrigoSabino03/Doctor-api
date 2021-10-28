import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

import '../styles/loginDoctor.css'

export function LoginDoctor(){

    var history = useHistory();

    function handleLoginDoctor(){
        history.push("/doctor")
    }

    return(
        <div className="login-container">
            <Header />
            <h2>Faça login com o seus dados</h2>

            <label>CRM
                <input type="text" /></label>
            <Button onClick={handleLoginDoctor}>Entrar</Button>
        </div>


    )
}