import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function LoginPatient(){
    
        var history = useHistory();

        function handleLoginPatient(){
            history.push("/patient")
        }
    
        return(
            <div className="login-container">
                <Header />
                <h2>Faça login com o seus dados</h2>
    
                <label>Email
                    <input type="text" /></label>
                <Button onClick={handleLoginPatient}>Entrar</Button>
            </div>
    
    
        )
    
}