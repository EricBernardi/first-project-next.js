import { Button } from "@mui/material";
import Style from "@/styles/Detalhes.module.css";
const URL = "http://localhost:3000/cursos";

export async function getStaticPaths() {
  const res = await fetch(URL);
  const cursos = await res.json();

  const paths = cursos.map((curso: any) => ({
    params: { id: curso.id.toString(), cursoId: curso.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const response = await fetch(`${URL}/${params.id.toString()}`);

  const curso = await response.json();
  return {
    props: { curso },
  };
}

export default function Detalhe({ curso }: any) {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.container_detalhes}>
          <div className={Style.detalhes}>
            <h3>Detalhes sobre o {curso.curso}:</h3>
            <div>{curso.detalhes}</div>
          </div>
          <div className={Style.btn_voltar}>
            <Button style={{ margin: 5 }} href="/cadastro/cursos" color="primary">
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
