import { useState } from "react"
import CursosNovos from "./cursos_novos";

export default function Curso(){
    const [nomeCurso, SetNomeCurso]: any = useState();


    return (
        <div>
            <CursosNovos setNomeCurso={SetNomeCurso} />
        </div>
    )
}