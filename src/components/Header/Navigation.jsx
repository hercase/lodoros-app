import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { HamburgerIcon, TimeIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

const Navigation = () => {
  return (
    <Menu>
      <MenuButton
        colorScheme="blue"
        as={IconButton}
        aria-label="Main menu"
        icon={<HamburgerIcon />}
      />
      <MenuList>
        <MenuItem>Horarios</MenuItem>
        <MenuItem>Links Útiles</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navigation;
