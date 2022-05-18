import Image from 'next/image';

import React from 'react';
import gio from '../../../../public/images/gio.jpg';
import may from '../../../../public/images/may.jpg';
import background1 from '../../../../public/images/background1.png';

import * as S from './style';

const AboutMe = () => {
  return (
    <S.Wrapper id='first-section'>
      <S.Title>Los Padres</S.Title>
      <S.SubTitle>Te esperamos con ansias</S.SubTitle>
      <S.Group>
        <S.LeftContent>
          <S.Absolute>
            <Image
              alt='background'
              src={background1}
              quality={100}
              width='225'
              height='225'
            />
            <S.ImageCircle>
              <Image alt='gio' src={gio} quality={100} objectFit='cover' />
            </S.ImageCircle>
          </S.Absolute>
        </S.LeftContent>
        <S.RightContent>
          <S.GroupText>
            <S.Name>Giovanni Insfran</S.Name>
            <S.AboutText>Hola, soy el Papá.</S.AboutText>
            <S.TextBox>
              Estoy mas que ansioso de poder recibirle en este mundo, desee
              verle desde el primer dia que me enteré que Amaya venía en camino.
            </S.TextBox>
          </S.GroupText>
        </S.RightContent>
      </S.Group>
      <S.Group>
        <S.LeftContent>
          <S.GroupText pt>
            <S.Name>Mayra Gonzalez</S.Name>
            <S.AboutText>Hola, soy la Mamá.</S.AboutText>
            <S.TextBox>
              Estoy mas que ansioso de poder recibirle en este mundo, desee
              verle desde el primer dia que me enteré que Amaya venía en camino.
            </S.TextBox>
          </S.GroupText>
        </S.LeftContent>
        <S.RightContent>
          <S.Absolute>
            <Image
              alt='background'
              src={background1}
              quality={100}
              width='225'
              height='225'
            />
            <S.ImageCircle>
              <Image alt='may' src={may} quality={100} objectFit='cover' />
            </S.ImageCircle>
          </S.Absolute>
        </S.RightContent>
      </S.Group>
    </S.Wrapper>
  );
};

export default AboutMe;
