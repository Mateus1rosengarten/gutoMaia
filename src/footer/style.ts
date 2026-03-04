import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 3rem 0rem;
  background-color: #f9f9f9;
  position: relative;
  width: 100%;
`;

export const FooterContact = styled.div`
  display: flex;
  padding: 0rem 3rem;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  text-align: left;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    color: #333;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
`;

export const Copyright = styled.div`
  margin-top: 2rem;
  font-family: "Raleway", sans-serif;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  @media (max-width: 768px) {
    padding: 2rem 2rem 0rem;
  }
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #25d366;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  z-index: 10000;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }

  @media (max-width: 480px) {
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
  }
`;
