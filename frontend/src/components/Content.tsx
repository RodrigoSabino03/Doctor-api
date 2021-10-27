import { FormPatients } from "./FormPatients";

import '../styles/content.css'

export function Content(){
    return(
        <div className="container-content">
            <h2>Venha ser nosso paciente</h2>
            <FormPatients />
        </div>
    )
}