import styled from 'styled-components';
import Lottie from 'lottie-react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-color: #fadcd9;

  height: 200px;

  width: 100%;
`;
export const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #535c68;

  min-height: 300px;
  margin: 0px 20px;
  margin-bottom: -100px;
  max-width: 500px;
  border-radius: 4px;
  padding: 20px;

  z-index: 1;

  width: 100%;

  @media (max-width: 350px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Parisienne', cursive;

  color: #fafafa;

  font-size: 30px;
  letter-spacing: 0px;
  line-height: 35px;
`;

export const Gio = styled.span`
  font-family: 'Caveat Brush', cursive;
  margin-bottom: 5px;
`;

export const LottieGif = styled(Lottie)`
  margin-left: -5px;
  height: 40px;
  width: 40px;
`;
