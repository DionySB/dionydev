import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 1px;
  position: fixed;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  padding-right: 50px;

  @media (max-width: 760px) {
    width: 30%;
    display: column;
    padding-right: 0px;

  }
`;

export const Name = styled.span`
  font-size: 51.2px;
  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Function = styled.span`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: purple;
  margin-bottom: 10px;
`;

export const Intro = styled.span`
  color: #FFF;
  text-align: justify;
  font-size: 18px;
  @media (max-width: 760px) {
    font-size: 15px;
  }

    @media (max-width: 480px) {
      font-size: 9pt;
    }
  
`;



export const Img = styled.img``

