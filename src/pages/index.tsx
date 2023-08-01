import { Grid } from "@mui/material";
import Style from "@/styles/Home.module.css";
import React, { SetStateAction, useEffect, useState } from "react";
import Login from "./login";

export default function Home() {
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
      <Grid container className={Style.container}></Grid>
    </>
  );
}
