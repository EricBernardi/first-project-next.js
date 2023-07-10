import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function MenuDrawer({ menuIsClicked }:any) {
  const [state, setState] = useState(false);

  async function closeMenu(){
    setState(false);
  }

  useEffect(() => {
    setState(menuIsClicked);
  }, [menuIsClicked])

  return (
    <>
      <Drawer open={state} onClose={closeMenu}>
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
