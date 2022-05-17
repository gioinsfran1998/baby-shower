import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md';

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

  border-radius: 16px;
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
`;

export const LocationIcon = styled(MdLocationOn).attrs(() => {
  return {
    size: 30
  };
})``;

export const CircleLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 50%;
  height: 50px;
  width: 50px;

  background-color: #fafafa;

  &:active {
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.9;
  }
`;
