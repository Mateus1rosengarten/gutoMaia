import styled from "styled-components";

interface CircleImageProps {
  src: string;
  size?: number;
}

export const TargetContainer = styled.div`
  padding: 3rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 5rem;

  @media (max-width: 768px) {
    padding: 2rem 0rem;
    row-gap: 3rem;
    column-gap: 0rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 50%;
    gap: 5px;
  }
`;

export const Title = styled.p`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CircleImage = styled.div<CircleImageProps>`
  width: ${({ size }) => size || 80}px;
  height: ${({ size }) => size || 80}px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  cursor: pointer;

  @media (max-width: 768px) {
    width: ${({ size }) => (size ? size * 0.75 : 60)}px;
    height: ${({ size }) => (size ? size * 0.75 : 60)}px;
  }
`;
