import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import {
  ArrowRightIcon,
  ChatIcon,
  HamburgerIcon,
  LinkIcon,
  MoonIcon,
} from "@chakra-ui/icons";
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
        <Link to="/times">
          <MenuItem icon={<MoonIcon />}>Lodoros time?</MenuItem>
        </Link>
        <Link to="/discord">
          <MenuItem icon={<ChatIcon />}>Discord (NO BT)</MenuItem>
        </Link>
        <MenuItem icon={<LinkIcon />} isDisabled>
          Links Útiles
        </MenuItem>
        <MenuItem icon={<ArrowRightIcon />} isDisabled>
          Videos
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navigation;
