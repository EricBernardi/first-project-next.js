import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Curso() {
  const router = useRouter();

  const id = router.query.cursoId;

  return (
    <>
      <Link
        href="/"
        style={{ textDecoration: "none", color: "black", fontSize: 25 }}
      >
        Voltar
      </Link>
      <div>Está sendo exibido o curso {id}</div>
      <div>
        <Link href={`${id?.toString()}/detalhes/${id?.toString()}`}>
          <Button>Detalhes</Button>
        </Link>
      </div>
    </>
  );
}
