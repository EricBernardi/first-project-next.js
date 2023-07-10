import FooterComponent from "./footer-component"
import MenuDrawer from "./menu-drawer"
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