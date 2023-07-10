import { AppBar, Box, ClickAwayListener, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useState } from "react";
import MenuDrawer from "./menu-drawer";

export default function Navbar() {
  const [menuIsClicked, setMenuIsClicked] = useState(false)
  function getMenuIsClicked(close: any = false){
      if(close) setMenuIsClicked(menuIsClicked);
      setMenuIsClicked(!menuIsClicked);
      console.log(menuIsClicked);
  }

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
          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 4 }}>
            <Link href="/" className={style.navbar_menus}>
            Home
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 4 }}>
            <Link href="/cadastro" className={style.navbar_menus}>
            Cadastro
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 4 }}>
            <Link href="/cadastro/cursos" className={style.navbar_menus}>
            Cursos
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <ClickAwayListener onClickAway={() => getMenuIsClicked(true)}>
        <MenuDrawer menuIsClicked={menuIsClicked}/>
      </ClickAwayListener>
    </Box>
  );
}
