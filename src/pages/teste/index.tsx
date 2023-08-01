
// import { BrowserRouter as Router, Link} from "react-router-dom";

import Link from "next/link";

// export async function getStaticProps(){
//     const data = await fetch('http://localhost:3000/cursos');

//     const response = await data.json();

//     return {props: {response}};
// }

export default function Teste({response}: any) {
    return (
        <>
            <ul>
                 <li>
                    <Link href={`/cadastro`}>Cadastro</Link>
                 </li>
            </ul>
        </>
    )
}