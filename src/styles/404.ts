import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    padding-top: 25vh;
    background-color: #000000d4;
`

export const TextTitle = styled.div(props => ({
    fontSize: '4rem',
    fontFamily: 'sans-serif',
    color: 'white', 
}))

export const  TextContent = styled.div(props => ({
    fontSize: '1.5rem',
    color: '#FFFFFF',
}))

export const Link = styled('a')`
    text-decoration: none;
    color: #808080d9;
    &:hover {
        color: #ffffff;
    }
`