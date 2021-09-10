import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { HamburgerIcon, TimeIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import { Link } from "react-router-dom";

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
        <MenuItem>
          <Link to="/times">Lodoros time?</Link>
        </MenuItem>
        <MenuItem>Links Útiles</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navigation;
