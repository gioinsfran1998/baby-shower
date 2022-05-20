import styled from 'styled-components';

import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 400px;
  padding: 30px 0px;

  position: relative;
  /* background-color: #fadcd9; */
`;

export const Title = styled.h1`
  font-family: 'Parisienne', cursive;

  font-size: 30px;
  letter-spacing: 0px;
  line-height: 60px;
  margin-bottom: -5px;
  z-index: 1;
`;

export const SubTitle = styled.h3`
  font-family: 'Merriweather', serif;
  text-transform: uppercase;
  text-align: center;

  line-height: 25px;
  font-size: 12px;
`;

export const Comment = styled.span`
  text-transform: uppercase;
  font-family: 'Roboto Flex', sans-serif;
  text-align: center;

  font-size: 10px;
  letter-spacing: 4px;

  z-index: 1;
`;

export const CoverImage = styled(Image)`
  margin-top: 10px;
`;

export const BallonImage = styled(Image)`
  opacity: 0.7;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const BoxDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fafafa;

  width: 70px;
  height: 70px;
  font-size: 30px;
  border-radius: 50px;

  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }

  @media (max-width: 300px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;
export const GroupBox = styled.div<{ mt?: boolean; mr?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: ${({ mt }) => (mt ? 20 : 0)}px;
  margin-right: ${({ mr }) => (mr ? 20 : 0)}px;

  @media (max-width: 400px) {
    margin-right: ${({ mr }) => (mr ? 10 : 0)}px;
  }
`;
