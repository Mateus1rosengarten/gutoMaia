"use client"
import styled from "styled-components";

const Hero = styled.div `
background-color: #D1E1F7;
padding-top:5rem;
display: flex;
position: relative;
justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items:center;
    padding-top:8rem;

   
  }
` 

const HeroImage = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  cursor:pointer;
  background-image: url('./images/gutoprofile.jpg');

  @media (max-width: 768px) {
  margin-top:2rem;
    width: 200px;
    height: 200px;
     margin: auto;
  }
`;

const HeroText = styled.div `
position:relative;
width:50%;
font-family: "Merriweather", serif;
position: relative;
display:flex;
flex-direction :column;


  @media (max-width: 768px) {
  justify-content: center;
   align-items:center;
   padding:2rem;
   width:100%;
   font-size:1rem;
   
  }
`


const HeroButton = styled.button`
  width: 350px;
  height: 80px;
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
    background-color: #007BFF;
    transform: scale(1.05); 
  }

  &:focus {
    outline: none;
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



const HeroSection:React.FunctionComponent = () => {
  const customMessage = "Olá, gostaria de mais informações para marcarmos nossa primeira consulta.";
  const whatsappLink = `https://wa.me/5511993784603?text=${customMessage}`;

  const handleOpenWhats = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }
    return (
        <Hero id="home">
            <HeroImage />
            <HeroText>
                <h1>Oi, eu sou o Guto Maia.</h1>
                <h2>Ofereco assistência personalizada para pessoas portadoras de deficiência e suas famílias. Minha missão é ajudar no dia a dia, oferecendo suporte prático e humano, sempre buscando o melhor cuidado e a qualidade de vida para quem precisa. Estou aqui para facilitar essa jornada! </h2>
<HeroButton
onClick={handleOpenWhats}
>Marque Agora sua Primeira Consulta Gratuita</HeroButton>          
 </HeroText>
           

        </Hero>

    )
}

export default HeroSection;