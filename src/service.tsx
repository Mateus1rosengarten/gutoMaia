"use client"
import styled from "styled-components";

const ServiceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #f3f7f9;
`;



const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3rem;

  
 @media (max-width: 768px) {
    margin-top:0;
}
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 3rem;
  margin: 1rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 380px;
  min-height: 400px;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.5;
  }

    @media (max-width: 768px) {
    margin:0;
   
  }
`;



const HeroButton = styled.button`
  width: 300px;
  height: 60px;
   margin-top: 5vh;
  margin-bottom: 5vh;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  font-weight: 400;
  border-radius: 30px;
  border: none; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease; 
  
  &:hover {
    background-color:  #007BFF;
    transform: scale(1.05);
  }

  &:focus {
    outline: none
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }


  @media (max-width: 768px) {
    height: 80px;
    width: 80vw;
   
  }
`
const Button = styled.a`
  display: flex;
  align-items: center;
  margin-top:2vh;
  width: 300px;
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

 @media (max-width: 768px) {
  width: 250px;
}
`;
const Service: React.FunctionComponent = () => {

  const customMessage = "Olá, gostaria de mais informações para marcarmos nossa primeira consulta.";
  const whatsappLink = `https://wa.me/5511993784603?text=${customMessage}`;

  const handleOpenWhats = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }
  return (
    <ServiceContainer id="service">
   

      <CardContainer>
        <ServiceCard>
          <h3 className="card-title"><strong>Atendimento Personalizado </strong></h3>
          <p className="card-text">Ofereço um atendimento <strong>personalizado e humanizado</strong>, com foco no bem-estar do paciente e também no <strong>suporte essencial à família</strong>. Tendo acesso a uma <strong>comunidade de apoio</strong>, onde famílias podem compartilhar experiências , fortalecendo a rede de inclusão e suporte.</p>
          <Button href={`https://wa.me/5511993784603?text=${customMessage}`} target="_blank">
          <img className="icon" src="./images/whatsapp.png" alt="WhatsApp" />
          <span>(11) 99378-4603</span>
        </Button>
        
        </ServiceCard>
        <ServiceCard>
          <h3 className="card-title"><strong>Terapias Online com Flexibilidade</strong></h3>
          <p className="card-text">Acredito que a inclusão e o apoio não devem ter fronteiras. Por isso, meu serviço é totalmente online, proporcionando a possibilidade de atender pessoas sem limitações geográficas. <strong>As terapias são realizadas via EAD</strong>, garantindo flexibilidade e comodidade para quem precisa de apoio.</p>
          <Button href={`https://wa.me/5511993784603?text=${customMessage}`} target="_blank">
          <img className="icon" src="./images/whatsapp.png" alt="WhatsApp" />
          <span>(11) 99378-4603</span>
        </Button>
        </ServiceCard>
        <ServiceCard>
          <h3 className="card-title"><strong>Agendamentos e Pacotes</strong></h3>
          <p className="card-text">Oferecemos <strong>terapias avulsas</strong> para atendimentos pontuais e <strong>pacotes de 4 sessões</strong> para um acompanhamento mais contínuo.<br/> Além disso, <strong>oferecemos descontos especiais</strong> para pessoas selecionadas garantindo que o acesso ao tratamento seja acessivel para todos.</p>
          <Button href={`https://wa.me/5511993784603?text=${customMessage}`} target="_blank">
          <img className="icon" src="./images/whatsapp.png" alt="WhatsApp" />
          <span>(11) 99378-4603</span>
        </Button>
        </ServiceCard>
      </CardContainer>

      <HeroButton
      onClick={handleOpenWhats}
      >Agende Sua Consulta
      </HeroButton>
    </ServiceContainer>
  );
};

export default Service;
