"use client";
import Image from "next/image";
import styled from "styled-components";

const NavBar = styled.div`
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 80px;
  background-color: #fff; 
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  z-index: 999;
   @media (max-width: 768px) {
   min-height: 60px;
    }
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 3rem;
   @media (max-width: 768px) {
   display: none;
   
  }
   
`;

const NavItem = styled.li`
  font-size: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    color: #4a90e2;
  }
`;

const NavLogo = styled.div.withConfig({
  shouldForwardProp:(props) => props !== 'isOpen',
}) <{isOpen : boolean}>`
width: 150px;
height: 120px;
position: absolute;
top:0;
right:0;
cursor:pointer;

 @media (max-width: 768px) {
display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
width: 100px;
height: 100px;
display:none;
  }

  @media (max-width: 550px) {
display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
width: 100px;
height: 100px;
display:none;
  }
`

const NavLogoMobile = styled.div.withConfig({
  shouldForwardProp:(props) => props !== 'isOpen',
}) <{isOpen : boolean}>`
width: 150px;
height: 120px;
position: absolute;
top:0;
right:0;
cursor:pointer;
display:none;

 @media (max-width: 768px) {
display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
width: 120px;
height: 100px;
margin-top:1rem;
padding-left:1rem;
display:block;
  }

  @media (max-width: 550px) {
display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
width: 120px;
height: 100px;

  }
`


const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
 
`;

const StyledButton = styled.button.withConfig({
  shouldForwardProp:(props) => props !== 'isOpen',
}) <{isOpen : boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03346E;
  color: white;
  cursor:pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  opacity: ${({ isOpen }) => (isOpen ? '0.5' : '1')};
  

  @media (min-width: 768px) {
    display: none;
  }
  
  svg {
    fill: white;
  }
`;

interface NavBarProps {
  toggle: () => void;
  isOpen:boolean;
}


const Navbar: React.FC<NavBarProps> = ({ toggle,isOpen }) => {
  return (
    <NavBar>
       <NavLogo isOpen={isOpen}>
          <Image src={'/images/logo1.png'} alt="logo" width={150} height={80} objectFit="cover" />
        </NavLogo>
        <NavLogoMobile isOpen={isOpen}>
          <Image src={'/images/logo1.png'} alt="logo" width={120} height={60} objectFit="cover" />
        </NavLogoMobile>
      <NavList>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#sobre">Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#service">Serviços</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contato">Contato</NavLink>
        </NavItem>
      </NavList>
      <StyledButton isOpen={isOpen} onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
        </svg>
      </StyledButton>
    </NavBar>
  );
};

export default Navbar;
