import styled from "styled-components";

export const SidebarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 80px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100; /* acima do conteúdo */
`;

export const NavList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 10rem 0 0 0;
  margin: 0;
  width: 100%;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled.span`
  font-size: 1.8rem;
  font-family: "Varela Round", sans-serif;
  color: black;
  cursor: pointer;
  display: inline-block;
  text-align: center;

  &:hover {
    color: #0070f3;
  }
`;
