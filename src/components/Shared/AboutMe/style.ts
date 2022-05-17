import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 400px;
  padding: 30px 0px;

  background-color: #fafafa;
`;

export const Title = styled.h1`
  font-family: 'Parisienne', cursive;

  font-size: 30px;
  letter-spacing: 0px;

  margin: 0px;
`;

export const SubTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;

  font-family: 'Roboto Flex', sans-serif;

  font-size: 10px;
  letter-spacing: 4px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  width: 100%;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  overflow: hidden;

  height: 250px;
  width: 250px;

  background-color: #fadcd9;

  @media (max-width: 540px) {
    max-height: 350px;

    height: 100%;
    width: 100%;
  }
`;

export const RightContent = styled.div`
  overflow: hidden;

  height: 250px;
  width: 250px;

  background-color: #fadcd9;

  @media (max-width: 540px) {
    max-height: 350px;

    height: 100%;
    width: 100%;
  }
`;

export const GroupText = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
`;

export const Name = styled.h6`
  font-family: 'Parisienne', cursive;

  font-size: 24px;
  letter-spacing: 0px;

  margin: 0px;
`;

export const AboutText = styled.h4`
  font-family: 'Merriweather', serif;

  font-size: 14px;
  margin: 0px;
  line-height: 30px;

  font-weight: 700;
`;

export const TextBox = styled.span`
  font-family: 'Open Sans', sans-serif;

  font-size: 14px;
  line-height: 20px;
`;
