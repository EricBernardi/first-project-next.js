import { Box, Button, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Style from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Grid container className={Style.container}>
        <Grid xs={12} className={Style.coitaner_home}>
          <h3 className={Style.title_inicial}>Tela inicial</h3>
        </Grid>
        <Grid xs={12} className={Style.coitaner_home}>
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
