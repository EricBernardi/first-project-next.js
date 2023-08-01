import { Grid } from "@mui/material";
import Style from "@/styles/Home.module.css";
import React, { SetStateAction, useState } from "react";
import Login from "./login";

export default function Home() {
  const [token, setToken] = useState('');
  
  const StorageToken = localStorage.getItem('token');

  console.log(StorageToken)

  setToken(StorageToken ? StorageToken : '');

  if(!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <>
      <Grid container className={Style.container}></Grid>
    </>
  );
}
