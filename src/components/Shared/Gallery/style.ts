import Lottie from 'lottie-react';
import styled from 'styled-components';
import { IoLogoWhatsapp } from 'react-icons/io';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0px;

  background-color: #fafafa;
`;

export const Title = styled.h1`
  font-family: 'Parisienne', cursive;

  font-size: 30px;
  letter-spacing: 0px;
  line-height: 50px;
  margin: 0px;
`;

export const Comment = styled.span`
  text-transform: uppercase;
  font-family: 'Roboto Flex', sans-serif;

  font-size: 10px;
  letter-spacing: 4px;
`;

export const SubTitle = styled.h4`
  font-family: 'Caveat Brush', cursive;

  font-size: 20px;
  margin: 0px;
  font-weight: 100px;

  & ~ & {
    margin-top: 10px;
  }
`;

export const CoverImage = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 4px;
  margin: 20px;
  max-width: 500px;

  @media (max-width: 350px) {
    margin: 10px;
  }
`;
export const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 500px;
  min-height: 140px;
  padding: 10px 0px;

  background-color: #fadcd9;
`;

export const TextBox = styled.span`
  text-align: center;
  font-family: 'Open Sans', sans-serif;

  font-size: 14px;
  line-height: 20px;
  padding: 0px 5px;

  margin-bottom: 10px;
`;

export const CircleLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 50%;
  height: 70px;
  width: 70px;

  &:active {
    opacity: 0.5;
    background-color: #535c68;
  }

  &:hover {
    opacity: 0.9;
    background-color: #535c68;
  }
`;

export const LottieGif = styled(Lottie)`
  height: 60px;
  width: 60px;
  cursor: pointer;
  &:active {
    opacity: 0.6;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const Whatsapp = styled(IoLogoWhatsapp).attrs(() => {
  return {
    size: 20
  };
})`
  margin-left: 5px;
  margin-bottom: -3px;
`;
