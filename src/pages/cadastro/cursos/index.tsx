"use client";
import { Button, List, ListItem, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { GetCursos, SaveCurso } from "@/pages/cursos.service";
import Link from "next/link";
import Style from "@/styles/Curso.module.css";
import { Btn } from "../Btn";
import Login from "@/pages/login";
import { BrowserRouter } from "react-router-dom";
import * as S from "./styles";

export default function Cursos() {
  const inputRef: any = useRef(null);
  const [cursos, setCursos] = useState([]);
  const [token, setToken] = useState("");

  async function adicionar() {
    const novoCurso = inputRef.current ? inputRef.current.value : "";
    const response = await SaveCurso(novoCurso);
    if (response?.status === 200) {
      setCursos(await GetCursos());
      inputRef.current.value = "";
    }
  }

  function verifyInput() {
    if (inputRef.current && inputRef.current.value) {
      cursos.forEach((curso: any) => {
        return curso.course_name.toLowerCase() ==
          inputRef.current.value.toLowerCase()
          ? { texto: "Remover", icon: true }
          : { texto: "Adicionar", icon: false };
      });
    }
    return { texto: "Adicionar", icon: "" };
  }

  useEffect(() => {
    async function fetchData() {
      setCursos(await GetCursos());
    }
    fetchData();
  }, []);

  function evento() {
    alert("Primeiro evento do projeto");
  }

  useEffect(() => {
    const storageToken = localStorage.getItem("token");
    if (storageToken) {
      setToken(storageToken);
    }
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Fragment>
      <Head>
        <title>Cursos cadastrados</title>
      </Head>
      <div className="container">
        <div className="container-title">
          <h3 className="title">Cursos cadastrados</h3>
        </div>
        <S.ContainerContent className="content">
          <S.BoxCourse>{showListCursos(cursos, "Cursos")}</S.BoxCourse>
          <div>
            <h3>Adicionar Cursos</h3>
            <div className="input-group">
              <TextField
                size="small"
                id="outlined-basic"
                label="Cursos"
                variant="outlined"
                inputRef={inputRef}
                onChange={verifyInput}
              />
              <Button size="medium" variant="text" onClick={adicionar}>
                {verifyInput().texto} <SendIcon />{" "}
              </Button>
            </div>
          </div>
        </S.ContainerContent>
      </div>
      <Btn event={evento} text="Primeiro botão"></Btn>
    </ Fragment>
  );
}

function showListCursos(cursos: any, title: string) {
  if (cursos)
    return (
      <BrowserRouter>
        <List>
          <h3>{title}</h3>
          {cursos.map((value: any) => (
            <ListItem key={value.id}>
              <Link
                className={Style.btn_detalhes}
                style={{ textDecoration: "none"}}
                href={`cursos/${value.id?.toString()}/detalhes/${value.id?.toString()}`}
              >
                {value.course_name}
              </Link>
            </ListItem>
          ))}
        </List>
      </BrowserRouter>
    );
}
