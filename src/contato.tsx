"use client";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  gap: 3rem;
  background-color: #f9f9f9;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 3rem; 
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 60px;
  background-color: #f4f4f9;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 30px;
  padding: 0 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(2px);
  }

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 15px; 
    object-fit: contain;
  }

  span {
    font-family: "Playfair Display", serif;
    flex-grow: 1;
    text-align: center;
    font-weight: 500;
  }
`;

const SocialIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
  gap: 2rem;
  max-width: 600px;
  width: 100%;
  justify-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem; 
`;

const IconBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

const Contact: React.FunctionComponent = () => {
  return (
    <Container>

      <ButtonContainer>
        <Button href="mailto:guto.maia@gmail.com" target="_blank">
          <img className="icon" src="./images/gmail.png" alt="Gmail" />
          <span>guto.maia@gmail.com</span>
        </Button>

        <Button href="https://wa.me/5521988272388" target="_blank">
          <img className="icon" src="./images/whatsapp.png" alt="WhatsApp" />
          <span>(11) 99378-4603
          </span>
        </Button>
      </ButtonContainer>

      <SocialIconsContainer>
        <IconBox href="https://www.facebook.com/guto.maia" target="_blank">
          <img src="./images/face.png" alt="Facebook" />
        </IconBox>

        <IconBox href="https://www.youtube.com/c/GutoMaia" target="_blank">
          <img src="./images/ytb.png" alt="YouTube" />
        </IconBox>

        <IconBox href="https://www.linkedin.com/in/gutomaiabaptista" target="_blank">
          <img src="./images/linkedin.png" alt="LinkedIn" />
        </IconBox>

        <IconBox href="https://www.instagram.com/gutomaiabaptista" target="_blank">
          <img src="./images/instagram.png" alt="Instagram" />
        </IconBox>
      </SocialIconsContainer>
    </Container>
  );
}

export default Contact;
