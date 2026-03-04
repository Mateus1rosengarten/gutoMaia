import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding: 1rem 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
  @media (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
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

export const NavLink = styled.a``;

export const NavLogo = styled.div`
  cursor: pointer;
  width: 150px;
  height: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin-left: 1rem;
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
  svg {
    fill: white;
  }
`;
