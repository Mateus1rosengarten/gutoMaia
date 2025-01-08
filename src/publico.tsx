
'use client'
import styled from "styled-components"

const Container = styled.div `
width:100%;
padding-top:2rem;
padding-bottom:2rem;
display:flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
`

const IconWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
   @media (max-width: 768px) {
    width: 45%;
    
  }`

  const Title = styled.p `
  font-family: "Playfair Display", serif;
  margin-top: 8px;  
  font-size: 14px; 
  text-align: center;

   @media (max-width: 768px) {
    margin-bottom:40px;
    
  }
`

const DownImage = styled.div`
  width: 80px;
  height: 80px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  background-image: url('./images/down.png');
  cursor:pointer;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const AutismImage = styled.div `
width: 80px;
height: 80px;
background-size: cover;
background-position: center;
border-radius:50%;
background-image: url('./images/autism.png');
cursor:pointer;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const ParalisiaImage = styled.div `
width: 80px;
height: 80px;
background-size: cover;
background-position: center;
border-radius:50%;
background-image: url('./images/paralisia.png');
cursor:pointer;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

`

const NeuroDivergentesImage = styled.div `
width: 80px;
height: 80px;
background-size: cover;
background-position: center;
border-radius:50%;
background-image: url('./images/neuroDivergentes.png');
cursor:pointer;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const TargetPublic: React.FunctionComponent = () => {
    return (
       
            <Container id="sobre">
                <IconWrapper>
                <DownImage />
                <Title>Sindrome de Down</Title>
                </IconWrapper>
                <IconWrapper>
                <AutismImage />
                <Title>Autismo</Title>
                </IconWrapper>
                <IconWrapper>
                <ParalisiaImage />
                <Title>Paralisia Cerebral</Title>
                </IconWrapper>
                <IconWrapper> 
                <NeuroDivergentesImage />
                <Title>Nerodivergentes</Title>
                </IconWrapper>
            </Container>

      
    )
}

export default TargetPublic;