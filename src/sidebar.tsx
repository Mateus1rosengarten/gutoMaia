import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'




interface SideBarProps {
    isOpen: boolean;
    toggle: () => void;
  }

const SidebarContainer = styled.div.withConfig({
  shouldForwardProp:(props) => props !== 'isOpen',
}) <{isOpen : boolean}>`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 20px;
  padding-top: 20px;
  z-index: 10;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    display: none; 
  }
`

const CloseButton = styled.button`
  color: black;
  position:relative;
  right:0;
  background: none;
  border:none;
  margin-top:10vh;
  margin-left:60vw;
  cursor: pointer;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 70px;
`

const NavItem = styled.li`
  list-style: none;
`

const StyledLink = styled.span`
  font-size: 1.5rem;
  font-family: 'Varela Round', sans-serif;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: #0070f3;
  }
`




const SideBar: React.FC<SideBarProps> = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </CloseButton>
      <NavList>
        <NavItem>
          <Link href="/" passHref>
            <StyledLink onClick={toggle}>Inicio</StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#sobre" passHref>
            <StyledLink onClick={toggle}>Sobre</StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#service" passHref>
            <StyledLink onClick={toggle}>Serviços</StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#contato" passHref>
            <StyledLink onClick={toggle}>Contato</StyledLink>
          </Link>
        </NavItem>
      </NavList>
    </SidebarContainer>
  )
}

export default SideBar

