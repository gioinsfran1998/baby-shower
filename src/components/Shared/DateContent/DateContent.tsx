import React from 'react';

import { useCountDown } from '@/hooks/useCountDown';

import carrito from '../../../../public/images/carritoBebe.png';

import * as S from './style';

const DateContent = () => {
  let babyShowerDate = new Date('Jun 04, 2022 17:00:00');

  const [days, hours, minutes, seconds] = useCountDown(babyShowerDate);

  return (
    <S.Wrapper>
      <S.Comment>Acompañanos a celebrar juntos</S.Comment>
      <S.Title>Mi dulce llegada</S.Title>
      <S.CoverImage
        alt='carrito'
        width={50}
        height={50}
        src={carrito}
        quality={100}
      />
      <S.Date>
        <S.GroupBox mt mr>
          <S.BoxDate>{days}</S.BoxDate>
          <S.SubTitle>Dias</S.SubTitle>
        </S.GroupBox>
        <S.GroupBox mr>
          <S.BoxDate>{hours}</S.BoxDate>
          <S.SubTitle>Horas</S.SubTitle>
        </S.GroupBox>
        <S.GroupBox mt mr>
          <S.BoxDate>{minutes}</S.BoxDate>
          <S.SubTitle>Minutos</S.SubTitle>
        </S.GroupBox>
        <S.GroupBox>
          <S.BoxDate>{seconds}</S.BoxDate>
          <S.SubTitle>Segundos</S.SubTitle>
        </S.GroupBox>
      </S.Date>
    </S.Wrapper>
  );
};

export default DateContent;
