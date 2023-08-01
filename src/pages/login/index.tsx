import { Button, Grid, TextField } from "@mui/material";
import Link from "next/link";
import Style from "@/styles/Home.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const apiUrl = "http://localhost:3000";

async function loginTeste(credentials: any){
  try {
    const response = await axios.post(`${apiUrl}/login`, { credentials });
    console.log(response);
    const token = response.data.data.token;

    localStorage.setItem('token', token);

    window.location.href;
  } catch (error: any) {
    console.log('Erro de login:', error);
  }
}

// async function loginUser(credentials: any) {
//     return fetch(`${apiUrl}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     }).then((data) => {
//       if (data.ok) data.json();
//     }).catch(error => {
//       console.log(error)
//     });
// }

export default function Login({ setToken }: any) {
  const [username, SetUsername] = useState();
  const [password, SetPassword] = useState();

  const handleSubmit = async (event: any) => {
    const token = await loginTeste({
      username,
      password,
    });
    setToken(token);
  };

  const login = [
    { input: "username", type: "text", label: "Username" },
    { input: "password", type: "password", label: "Password" },
  ];


  function saveLogin(input: any) {
    input.target.type === "text" ? SetUsername(input.target.value) 
    : SetPassword(input.target.value);
  }

  return (
    <>
      <Grid container className={Style.container}>
        <Grid xs={12} className={Style.coitaner_home}></Grid>
        <Grid xs={6} direction="column" className={Style.container_login}>
          {login.map((value: any) => (
            <>
              <Grid xs={12}>
                <TextField
                  className={Style.input_login}
                  key={value.input}
                  inputRef={() => value.input}
                  type={value.type}
                  onChange={saveLogin}
                  label={value.label}
                  variant="filled"
                  color="secondary"
                ></TextField>
              </Grid>
            </>
          ))}
        </Grid>
        <Grid xs={12} className={Style.coitaner_home}>
          <div>
            <Button
              type="submit"
              size="large"
              variant="text"
              color="secondary"
              className={Style.button}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
