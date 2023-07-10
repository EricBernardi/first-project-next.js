import { Button, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Style from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tela inicial</title>
      </Head>
      <Grid container>
        <Grid xs={12} className={Style.coitaner_home}>
          <h3 className={Style.title_inicial}>Tela inicial</h3>
        </Grid>
        <Grid xs={12} className={Style.coitaner_home}>
          <Image
            src="/images/nightCity.jpeg"
            width={1400}
            height={700}
            alt="Imagem de uma cidade durante a noite."
          />
        </Grid>
        <Grid xs={12} className={Style.coitaner_home}>
          <div>
            <Link href="/cadastro">
              <Button size="large" variant="text">
                Entrar
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
