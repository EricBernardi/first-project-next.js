import { Button, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Cadastro() {
  return (
    <>
      <Head>
        <title>Tela de cadastro</title>
      </Head>
      <Grid container>
        <Grid xs={12} className="coitaner-home">
          <h2>Tela de cadastros</h2>
        </Grid>
        <Grid xs={12} className="coitaner-home">
          <div>
            <Link href="/cadastro/cursos">
              <Button size="medium" variant="text">
                Cursos
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
