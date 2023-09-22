"use client";
import { List, ListItem } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { GetCursos, SaveCurso } from "@/pages/cursos.service";
import Link from "next/link";
import Style from "@/styles/Curso.module.css";
import Login from "@/pages/login";
import { BrowserRouter } from "react-router-dom";
import * as S from "./styles";

export default function Cursos() {
  const inputRef: any = useRef(null);
  const [cursos, setCursos] = useState([]);
  const [token, setToken] = useState("");

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
        <S.ContainerTitle>
          Cursos cadastrados
        </S.ContainerTitle>
        <S.ContainerContent className="content">
          <S.BoxCourse>{showListCursos(cursos)}</S.BoxCourse>
        </S.ContainerContent>
      </div>
    </ Fragment>
  );
}

function showListCursos(cursos: any) {
  if (cursos)
    return (
      <Fragment>
        <List>
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
      </Fragment>
    );
}
