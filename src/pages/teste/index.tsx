export async function getStaticProps(){
    const data = await fetch('http://localhost:3000/cursos');

    const response = await data.json();

    return {props: {response}};
}

export default function Teste({response}: any) {
    return (
        <>
            <h1>Tarefas para fazer: </h1>
            <ul>
                {response.map((value: any) => {
                    <li key={value.key}>{value.curso}</li>
                })}
            </ul>
        </>
    )
}