import { Button, Grid } from "@mui/material";
import Head from "next/head";
import Login from "../login";
import { useState, useEffect, useRef } from "react";
import * as S from "./style";
import { SaveCurso } from "@/pages/cursos.service";

export default function Cadastro() {
  const [token, setToken] = useState("");
  const inputRef: any = useRef(null);
  const inputDetail: any = useRef(null);
  const [courseSave, setCourseSave] = useState(false);

  async function handleAddCourse() {
    try {
      const course = {
        courseName: `${inputRef.current?.value}`,
        courseDetail: `${inputDetail.current?.value}`,
      };
      const response = await SaveCurso(course);
      if (response?.status === 200) {
        clearFields();
        setCourseSave(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setCourseSave(false);
    }
  }

  function clearFields() {
    inputRef.current.value = "";
    inputDetail.current.value = "";
  }

  useEffect(() => {
    console.log("Campos salvos");
  }, []);

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
    <>
      <Head>
        <title>Tela de cadastro</title>
      </Head>
      <Grid container>
        <Grid xs={12} className="coitaner-home">
          <h2>Tela de cadastros</h2>
        </Grid>
        <Grid xs={12} className="coitaner-home">
          <S.ContainerFields>
            <S.InputField
              id="nameCourse"
              type="text"
              placeholder="Nome do curso"
              inputRef={inputRef}
            ></S.InputField>
            <S.InputField
              id="detailCourse"
              type="text"
              rows={5}
              placeholder="Detalhes do curso"
              inputRef={inputDetail}
            ></S.InputField>
          </S.ContainerFields>
          <div>
            <Button size="medium" variant="text" onClick={handleAddCourse}>
              Adicionar
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
