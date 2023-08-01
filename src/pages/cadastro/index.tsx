import { Button, Grid } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import Login from "../login";
import { useState, useEffect } from 'react';

export default function Cadastro() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    if (storageToken) {
      setToken(storageToken);
    }
  }, [token]);

  if(!token) {
    return <Login setToken={setToken}/>
  }
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
