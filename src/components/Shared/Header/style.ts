import styled from 'styled-components';

import Link from 'next/link';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  min-height: 700px;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  z-index: 1;
  top: 0;

  width: 100%;

  height: 50px;
  padding: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const ButtonLink = styled(Link)``;

export const LinkTo = styled.a`
  text-transform: uppercase;
  font-family: 'Merriweather', serif;

  font-weight: 400;

  font-size: 14px;
  padding: 5px 10px;

  color: #ffffff;
`;

export const Text = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SubTitle = styled.span`
  font-family: 'Caveat Brush', cursive;
  /* font-family: 'Roboto Flex', sans-serif; */
  font-family: 'Open Sans', sans-serif;
  font-family: 'Merriweather', serif;
  letter-spacing: 2px;

  text-transform: uppercase;

  text-align: center;
  white-space: nowrap;

  color: #ffffff;

  font-size: 20px;
  margin: 0px;

  opacity: 0.8;
`;

export const Name = styled.h3`
  font-family: 'Parisienne', cursive;
  text-align: center;

  color: #ffffff;

  font-size: 55px;
  margin: 0px;

  @media (max-width: 350px) {
    font-size: 45px;
  }
`;
