import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.2px solid purple;
  position: relative; /* Para manter o contexto do z-index */
  z-index: 10; /* Z-index para garantir que o contêiner esteja acima do conteúdo */
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
`;

export const Title = styled.div`
  font-size: 30px;
  color: #FFF;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  
  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #333;
    position: fixed; /* Faz o menu fixo na tela */
    height: 100%;
    top: 0;
    right: 0;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    z-index: 20; /* Z-index alto para sobrepor outros elementos */

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Ancora = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  transition: 0.9s;
  
  .translucent-icon {
    margin: 10px;
  }
  
  &:hover {
    color: purple;
  }

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const SubTitle = styled.span``;
