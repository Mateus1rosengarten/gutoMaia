"use client";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background-color: #d1e1f7;
  color: black;
  padding: 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 2rem;
  padding-left: 2rem; 
  padding-right: 2rem; 
  min-height: 250px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;


const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 600px; 
  position: absolute;
  bottom: 3rem;
  left: 2rem; 

   @media (max-width: 480px) {
    left:0;
    padding-left:1rem;

  }
`;


const SocialIconsFooter = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 100%;
  max-width: 600px;
  justify-content: flex-start;
`;

const IconBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
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
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

    @media (max-width: 768px) {
  width: 30px;
  height: 30px;
}
`;

const CopyrightText = styled.div`
  width: 100%;
  font-family: "Raleway", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media (max-width: 768px) {
     font-size: 0.8rem;
}
  
`;

const WhatsAppIcon = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 10000;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 40px;
    height: 40px;
  }
    @media (max-width: 768px) {
    bottom: 30px;
}
`;

const FooterSection: React.FunctionComponent = () => {
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

 


  return (
    <>
      <Footer id="contato">
        <FooterLeft>
            <div className="div-email">
          <IconBox href="mailto:maiagutomaia@gmail.com" target="_blank">
              <img src="/images/gmail.png" alt="Gmail" />
            </IconBox>
            <span className="span-email"> maiagutomaia@gmail.com</span>
            </div>
          <SocialIconsFooter>
            <IconBox href="https://www.facebook.com/guto.maia" target="_blank">
              <img src="/images/face.png" alt="Facebook" />
            </IconBox>
            <IconBox href="https://www.youtube.com/@GutoMaia" target="_blank">
              <img src="/images/ytb.png" alt="YouTube" />
            </IconBox>
            <IconBox href="https://www.linkedin.com/in/gutomaiabaptista" target="_blank">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </IconBox>
            <IconBox href="https://www.instagram.com/gutomaiabaptista" target="_blank">
              <img src="/images/instagram.png" alt="Instagram" />
            </IconBox>
          </SocialIconsFooter>
        </FooterLeft>
        <CopyrightText>
          <p>&copy; {getCurrentYear()} José Augusto Maia Baptista(CBO 2394-40/45). Todos os direitos reservados.</p>
        </CopyrightText>
     

      </Footer>
      <WhatsAppIcon href="https://wa.me/5511993784603" target="_blank" rel="noopener noreferrer"
      >
        <img src="/images/whatsapp.png" alt="WhatsApp" />
      </WhatsAppIcon>
    </>
  );
}

export default FooterSection;
