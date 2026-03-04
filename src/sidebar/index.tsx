import React from "react";
import Link from "next/link";

import {
  CloseButton,
  NavItem,
  NavList,
  SidebarContainer,
  StyledLink,
} from "./style";

interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

interface NavLinkItem {
  label: string;
  href: string;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </CloseButton>

      <NavList>
        {links.map((link) => (
          <NavItem key={link.href}>
            <Link href={link.href} passHref>
              <StyledLink onClick={toggle}>{link.label}</StyledLink>
            </Link>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default SideBar;

const links: NavLinkItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#service" },
  { label: "Contato", href: "#contato" },
];
