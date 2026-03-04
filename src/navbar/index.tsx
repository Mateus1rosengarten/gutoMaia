import Image from "next/image";

import {
  HamburgerButton,
  NavBarContainer,
  NavItem,
  NavLink,
  NavList,
  NavLogo,
} from "./style";

interface NavBarProps {
  toggle: () => void;
  isOpen: boolean;
}

interface NavLinkItem {
  label: string;
  href: string;
}

const Navbar: React.FC<NavBarProps> = ({ toggle }) => {
  return (
    <NavBarContainer>
      <NavList>
        {navLinks.map((item) => (
          <NavItem key={item.href}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </NavItem>
        ))}
      </NavList>
      <NavLogo>
        <Image
          src={"/images/logo.png"}
          alt="Logo Guto Maia"
          width={120}
          height={80}
          objectFit="cover"
        />
      </NavLogo>

      <HamburgerButton onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
        </svg>
      </HamburgerButton>
    </NavBarContainer>
  );
};

export default Navbar;

export const navLinks: NavLinkItem[] = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#service" },
  { label: "Contato", href: "#contato" },
];
