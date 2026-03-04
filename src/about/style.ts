import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  padding: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 3rem 0rem;
    gap: 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 0rem 5rem;
  width: 100vw;

  @media (max-width: 768px) {
    padding: 0rem 1rem;
    gap: 2rem;
  }
`;

export const AboutText = styled.h2`
  flex: 1 1 45%;
  line-height: 2;
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
  text-align: justify;

  strong {
    font-weight: 800;
    color: #007bff;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
  }
`;

export const ImageContainer = styled.div<{ image: string }>`
  width: 45%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  &.hide-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
