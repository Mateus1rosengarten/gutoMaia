import {
  Button,
  Description,
  HeroContainer,
  TextWrapper,
  Title,
} from "./style";
import Image from "next/image";

const HeroSection: React.FunctionComponent = () => {
  const handleOpenWhats = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };
  return (
    <HeroContainer id="home">
      <Image
        src="/images/gutoprofile.jpg"
        alt="Foto do Professor Guto Maia"
        width={240}
        height={240}
        style={{ borderRadius: "50%" }}
      />
      <TextWrapper>
        <Title>
          Oi, eu sou Prof. J Augusto Maia Baptista <span> (Guto Maia) </span>{" "}
        </Title>
        <Description>
          Ofereco assistência personalizada para pessoas com deficiência e suas
          famílias, atendo também em contextos acadêmicos e institucionais.
          Minha missão é ajudar no dia a dia, oferecendo suporte prático e
          humano, sempre buscando o melhor cuidado e a qualidade de vida para
          quem precisa. Estou aqui para facilitar essa jornada!{" "}
        </Description>
        <Button onClick={handleOpenWhats}>Agendar Conversa Gratuita</Button>
      </TextWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

// VARIABLES

const customMessage =
  "Olá, gostaria de mais informações para marcarmos nossa primeira consulta.";
const whatsappLink = `https://wa.me/5511993784603?text=${customMessage}`;
