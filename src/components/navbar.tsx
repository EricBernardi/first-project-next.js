import {
  AppBar,
  Box,
  ClickAwayListener,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useState } from "react";
import MenuDrawer from "./menu-drawer";

export default function Navbar() {
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  function getMenuIsClicked() {
    setMenuIsClicked(!menuIsClicked);
    console.log(menuIsClicked);
  }

  const handleMenuClick = (clicked: any) => {
    setMenuIsClicked(clicked);
  };

  const menuItens = [
    {index: 1, menu: 'Home', route: '/'},
    {index: 2, menu: 'Cadastro', route: '/cadastro'},
    {index: 3, menu: 'Cursos', route: '/cadastro/cursos'}
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={style.navbar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4 }}
            onClick={getMenuIsClicked}
          >
            <MenuIcon />
          </IconButton>
          {menuItens.map((value: any) => (
            <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ mr: 4}}
            key={value.id}
            >
              <Link key={value.id} href={value.route} className={style.navbar_menus}>
                {value.menu}
              </Link>  
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
      <MenuDrawer menuIsClicked={menuIsClicked} onMenuClick={handleMenuClick}/>
    </Box>
  );
}
