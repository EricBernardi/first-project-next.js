import FooterComponent from "./footer-component"
import Navbar from "./navbar"

export default function MainContainer({children}: any){
    return (
        <>
            <Navbar />
            {/* <MenuDrawer /> */}
            <div>{children}</div>
            <FooterComponent />
        </>
    )
}