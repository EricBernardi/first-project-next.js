import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";
import MenuDrawer from "./menu-drawer";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { redirect } from "next/dist/server/api-utils";

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
    { index: 1, menu: "Home", route: "/" },
    { index: 2, menu: "Cadastro", route: "/cadastro" },
    { index: 3, menu: "Cursos", route: "/cadastro/cursos" },
    // { index: 4, menu: "Logout", route: "/logout" }, refazer depois
  ];

  const redesSociais: any = [
    { rede: "facebook" },
    { rede: "instagram" },
    { rede: "linkedin" },
  ];

  function showRedeSocial() {
    return (
      <>
        {redesSociais.map((value: any) => {
          switch (value.rede) {
            case "facebook":
              return (
                <Button
                  key={value.rede}
                  onClick={(v: any) => handleChange(value.rede)}
                >
                  <FaFacebook />
                </Button>
              );
            case "instagram":
              return (
                <Button key={value.rede}>
                  <FaInstagram />
                </Button>
              );
            case "linkedin":
              return (
                <Button key={value.rede}>
                  <FaLinkedin />
                </Button>
              );
            default:
              return null;
          }
        })}
      </>
    );
  }

  function handleChange(value: any) {
    const [link, setLink] = useState();
    switch (value) {

      default:
        break;
    }
    if (link) window.open(link);
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
          {menuItens.map((value: any) => {
            if (value.route === "/logout") {
              useEffect(() => {
                localStorage.removeItem("token");
              }, []);
            }
            return (
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ mr: 4 }}
                key={value.id}
              >
                <Link
                  key={value.id}
                  href={value.route}
                  className={style.navbar_menus}
                >
                  {value.menu}
                </Link>
              </Typography>
            );
          })}
          <Typography>{showRedeSocial()}</Typography>
        </Toolbar>
      </AppBar>
      <MenuDrawer menuIsClicked={menuIsClicked} onMenuClick={handleMenuClick} />
    </Box>
  );
}
