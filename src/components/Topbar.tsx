/** @jsxImportSource @emotion/react */
import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Flex,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { Colors } from "../consts/colors";

const Topbar = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      bg={Colors.BLUE_MID}
      color={Colors.BLUE_LIGHT}
      width="100%"
      zIndex={9999}
    >
      <Text fontSize="lg" fontWeight="bold">
        Santi y Lina
      </Text>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon color={Colors.BLUE_DARK} />}
          variant="outline"
          color={Colors.BLUE_DARK}
        />
        <MenuList zIndex={9999} color={Colors.BLUE_MID}>
          <MenuItem icon={<AddIcon color={Colors.BLUE_LIGHT} />} command="⌘T">
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command="⌘O">
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Topbar;
