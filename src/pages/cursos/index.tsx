import { useState } from "react"
import CursosNovos from "./cursos_novos";

export default function Curso(){
    const [nomeCurso, SetNomeCurso]: any = useState();


    return (
        <div>
            <CursosNovos setNomeCurso={SetNomeCurso} />
            {
                nomeCurso && nomeCurso.length >= 3 ? (
                    <div>{nomeCurso}</div>
                ) : <div>Não há cursos para exibir!</div>
            }
        </div>
    )
}