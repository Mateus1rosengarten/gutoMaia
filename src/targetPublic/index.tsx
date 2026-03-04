import { CircleImage, IconWrapper, TargetContainer, Title } from "./style";

const TargetPublic: React.FunctionComponent = () => {
  return (
    <TargetContainer id="sobre">
      <IconWrapper>
        <CircleImage src="./images/down.png" />
        <Title>Sindrome de Down</Title>
      </IconWrapper>
      <IconWrapper>
        <CircleImage src="./images/autism.png" />
        <Title>Autismo</Title>
      </IconWrapper>
      <IconWrapper>
        <CircleImage src="./images/paralisia.png" />
        <Title>Paralisia Cerebral</Title>
      </IconWrapper>
      <IconWrapper>
        <CircleImage src="./images/neuroDivergentes.png" />
        <Title>Neurodiversidade complexa</Title>
      </IconWrapper>
    </TargetContainer>
  );
};

export default TargetPublic;
