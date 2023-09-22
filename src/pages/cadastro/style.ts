import { ErrorMessage } from "@hookform/error-message";
import { Box, TextField, styled } from "@mui/material";


export const TitlePage = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-top: 2vh;
    `

export const Container = styled(Box)`
    display: flex;
    width: 100vh;
    height: 60vh;
    align-items: center;
    margin-top: 10vh;
    border: 1px solid;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
`

export const ContainerFields = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
`

export const InputField = styled(TextField)`
    width: 85vh;
    margin-bottom: 1rem;
`

export const InputFieldTextArea = styled(TextField)`
    width: 85vh;
`

export const BtnContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonSend = styled(Box)`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 85vh;
`

export const SpanError = styled(ErrorMessage)`
    color: red !important;
`