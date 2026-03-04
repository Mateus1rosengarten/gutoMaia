import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: #d1e1f7;
  padding: 6rem 2rem;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #475569;
  line-height: 1.6;
  text-align: left;
`;

export const Button = styled.button`
  width: 50%;
  padding: 1.2rem;
  border-radius: 999px;
  border: none;
  color: white;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
