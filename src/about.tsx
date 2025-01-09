"use client";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  background-color: #f7f9fc; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vw;

   @media (max-width: 768px) {
    width: 100%;
      padding: 0 5vw;
    }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 8vh; 
  gap: 4vw; 
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom:1rem;
    }
`;

const TextContainer = styled.div`
  width: 45%;
  padding-top: 3vh;
  padding-bottom: 3vh;
  line-height: 1.6;
  
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: #333;
    text-align: justify;
    max-width: 700px;
    margin: 0 auto;
  }

  strong {
    font-weight: 600;
    color: #007BFF; 
  }

    @media (max-width: 768px) {
    width: 100%;
     padding-top: 0;
    }

    @media (max-width: 1250px) {
    h2 {
    font-size: 1.2rem;   
  }
    }
`;

const FirstImageContainer = styled.div`
  width: 45%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/gutoDeficiente.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  cursor:pointer;

  &:hover {
    transform: scale(1.05);
  }

   @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center 15%;
      

}
  @media (min-width: 769px) and (max-width: 1000px) {
   height: 400px;

}
@media (min-width: 1250px) {
width: 45%;
height: 400px;
}  

@media (min-width: 1600px) {
width: 45%;
height: 320px;
}  
`;

const SecondImageContainer = styled.div`
  width: 45%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/gutoDiploma.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  cursor:pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: none;
}


  @media (min-width: 769px) and (max-width: 1000px) {
   height: 800px;

}
@media (min-width: 1250px) {
width: 45%;
height: 750px;
}  

@media (min-width: 1600px) {
width: 45%;
height: 600px;
}  
`;

const About: React.FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <TextContainer>
          <h2 className="about-me">
            Guto Maia é <strong>neuropsicopedagogo</strong>, <strong>escritor</strong>, <strong>professor</strong> e <strong>palestrante</strong> apaixonado por transformar a vida de pessoas com deficiência e suas famílias. <strong>Pai de Pedro, um jovem autista</strong>, sua experiência pessoal é o que mais o motiva a trabalhar com inclusão, acessibilidade e apoio emocional. Seu compromisso é genuíno, guiado por empatia e uma profunda vontade de fazer a diferença.
          </h2>
        </TextContainer>
        <FirstImageContainer />
      </Row>
      <Row>
        <SecondImageContainer />
        <TextContainer>
          <h2 className="about-me">
            Guto é pós-graduado em <strong>Neuropsicopedagogia, Docência do Ensino Superior e Direitos Humanos, Saúde, Acessibilidade e Inclusão</strong> pela ENSP/Fiocruz, com <strong>11 cursos de extensão</strong> e <strong>autor de três livros</strong> sobre neurodiversidade complexa e inclusão. É <strong>professor convidado na ENSP/Fiocruz</strong> e <strong>palestrante</strong> renomado em eventos sobre inclusão e educação adaptada. Com vasta experiência prática, foi <strong>coordenador de projetos socioeducativos</strong> e <strong>conselheiro de saúde pública</strong>, atuando em organizações como APAEs e ONGs especializadas em deficiências, atuando também na implantação do InovaUSP Acessibilidade, fortalecendo a inovação em acessibilidade no ambiente acadêmico. Sua carreira é marcada pela busca por inovação e transformação na educação e inclusão social.
          </h2>
        </TextContainer>
      </Row>
    </Container>
  );
};

export default About;
