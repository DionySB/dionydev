import styled from 'styled-components';

export const WhatsAppButton = styled.div`
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  box-shadow: 1px 1px 2px #888;
  z-index:1000;
  background-image: url('/images/logo.png');
  background-size: contain; /* Ajusta a imagem para caber no botão */
  background-position: center; /* Centraliza a imagem */
  
  &:hover {
    transform: scale(1.1); /* Aumenta o botão ao passar o mouse */
  }
`;
