import React, { useEffect, useState } from "react";
import {
  ClickAwayListener,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Style from "./../styles/Menu_drawer.module.css";
import Link from "next/link";

export default function MenuDrawer({ menuIsClicked, onMenuClick }: any) {
  const [state, setState] = useState(false);
  const menuItens = [
    {index: 1, menu: 'Home', route: '/'},
    {index: 2, menu: 'Cadastro', route: '/cadastro'},
    {index: 3, menu: 'Cursos', route: '/cadastro/cursos'}
  ]

  useEffect(() => {
    setState(menuIsClicked);
  }, [menuIsClicked]);

  return (
    <>
      <Drawer
        className={Style.container}
        open={state}
        onClose={() => {
          const updatedMenuIsClicked = !state;
          setState(updatedMenuIsClicked);
          onMenuClick(updatedMenuIsClicked);
        }}
      >
        <List className={Style.list_menus}>
        {menuItens.map((value: any) => (
          <ListItem className={Style.item_menu} key={value.index}><Link className={Style.item_menu_link} href={value.route}>{value.menu}</Link></ListItem>
        ))}
        </List>
      </Drawer>
    </>
  );
}
