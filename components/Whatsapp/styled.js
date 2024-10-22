import styled from 'styled-components';

export const WhatsAppButton = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 1px 1px 2px #888;
  z-index: 1000;
  background-image: url('/images/logo.png');
  background-size: contain; 
  background-position: center;
  
  &:hover {
    transform: scale(1.1); 
  }

  @media (max-width: 560px) {
    display: none;
  }
`;
