import FooterComponent from "./footer-component"
import Navbar from "./navbar"
import * as S from "../styles/Globals"

export default function MainContainer({children}: any){
    return (
        <S.Container>
            <Navbar />
            {/* <MenuDrawer /> */}
            <div>{children}</div>
            <FooterComponent />
        </S.Container>
    )
}