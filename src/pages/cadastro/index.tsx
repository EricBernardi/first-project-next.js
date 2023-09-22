import { Button, Grid, TextField } from "@mui/material";
import Head from "next/head";
import Login from "../login";
import { useState, useEffect, useRef } from "react";
import * as S from "./style";
import { SaveCurso } from "@/pages/cursos.service";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, defaultValues } from "./constants";

export default function Cadastro() {
  const [token, setToken] = useState("");
  const inputRef: any = useRef(null);
  const inputDetail: any = useRef(null);
  const [courseSave, setCourseSave] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  function clearFields() {
    inputRef.current.value = "";
    inputDetail.current.value = "";
  }

  async function onSubmit(data: any) {
    try {
      const response = await SaveCurso(data);
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Container>
            <Grid container>
              <Grid xs={12} className="coitaner-home">
                <S.TitlePage>Tela de cadastros</S.TitlePage>
              </Grid>
              <Grid xs={12} className="coitaner-home">
                <S.ContainerFields>
                  <S.InputField
                    id="nameCourse"
                    type="text"
                    label="Nome do curso"
                    placeholder="Digite"
                    inputRef={inputRef}
                    error={Boolean(errors.nameCourse)}
                    {...register("nameCourse")}
                  ></S.InputField>
                  <S.SpanError errors={errors} name="nameCourse"></S.SpanError>
                  <S.InputFieldTextArea
                    id="detailCourse"
                    rows={5}
                    multiline
                    error={Boolean(errors.detailCourse)}
                    label="Detalhes do curso"
                    placeholder="Digite"
                    inputRef={inputDetail}
                    {...register("detailCourse")}
                  ></S.InputFieldTextArea>
                  <S.SpanError
                    errors={errors}
                    name="detailCourse"
                  ></S.SpanError>
                </S.ContainerFields>
                <S.BtnContainer>
                  <S.ButtonSend>
                    <Button
                      size="medium"
                      variant="text"
                      type="submit"
                      endIcon={<SendIcon />}
                      color="secondary"
                    >
                      Adicionar
                    </Button>
                  </S.ButtonSend>
                </S.BtnContainer>
              </Grid>
            </Grid>
          </S.Container>
        </form>
      </div>
    </>
  );
}
