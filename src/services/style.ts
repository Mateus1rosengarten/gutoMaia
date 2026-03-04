import { styled } from "styled-components";

export const ServiceContainer = styled.section`
  padding: 3rem 3rem;
  background-color: #f3f7f9;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 3rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  max-width: 380px;
  min-height: 400px;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.6rem;
    color: #333;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const WhatsAppButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f4f4f9;
  color: #333;
  font-size: 1.1rem;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  }

  span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;
