import { AboutContainer, AboutText, ImageContainer, Row } from "./style";

const About: React.FunctionComponent = () => {
  return (
    <AboutContainer>
      <Row>
        <AboutText>
          Guto Maia é{" "}
          <strong>neuropsicopedagogo, escritor, professor e palestrante</strong>{" "}
          apaixonado por transformar a vida de pessoas com deficiência e suas
          famílias. Pai de Pedro, um jovem autista, sua experiência pessoal é o
          que mais o motiva a trabalhar com inclusão, acessibilidade e apoio
          emocional. Seu compromisso é genuíno, guiado por empatia e uma
          profunda vontade de fazer a diferença.
        </AboutText>

        <ImageContainer image="/images/gutoDeficiente.jpg" />
      </Row>
      <Row>
        <ImageContainer
          image="images/gutoDiploma.jpg"
          className="hide-mobile"
          style={{
            height: "800px",
          }}
        />
        <AboutText>
          <strong>Guto é pós-graduado em Neuropsicopedagogia</strong> , Docência
          do Ensino Superior e Direitos Humanos, Saúde, Acessibilidade e
          Inclusão pela ENSP/Fiocruz, com 11 cursos de extensão e autor de três
          livros sobre neurodiversidade complexa e inclusão. É professor
          licenciado convidado na pós-graduação ENSP/Fiocruz e palestrante
          atuante em eventos sobre acessibilidade e educação adaptada. Com vasta
          experiência prática, foi coordenador de projetos socioeducativos e
          conselheiro de saúde pública , atuando em organizações como APAEs e
          ONGs especializadas em deficiências. Vem trabalhando na implantação do
          Núcleo InovaUSP Acessibilidade, fortalecendo a inovação em
          acessibilidade no ambiente acadêmico. Sua carreira é marcada pela
          busca por inovação e transformação na educação e inclusão social.{" "}
        </AboutText>
      </Row>
    </AboutContainer>
  );
};

export default About;
