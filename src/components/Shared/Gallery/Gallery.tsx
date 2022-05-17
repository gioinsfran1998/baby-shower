import React from 'react';

import Link from 'next/link';

import Image from 'next/image';
import shop from 'public/images/shop.jpg';

import * as S from './style';

const Gallery = () => {
  return (
    <S.Wrapper id='second-section'>
      <S.Comment>Un Evento Especial En</S.Comment>
      <S.Title>Integral Bota</S.Title>
      <S.CoverImage>
        <Image alt='shop' src={shop} quality={100} />
        <S.Location>
          <S.SubTitle>Ubicación</S.SubTitle>
          <Link href='https://goo.gl/maps/ULnnewiUA6KX85iY7'>
            <S.CircleLocation>
              <S.LocationIcon />
            </S.CircleLocation>
          </Link>
          <S.TextBox>Avda. Las Acacias c/ ka'a .</S.TextBox>
          <S.SubTitle>Contacto</S.SubTitle>
          <S.TextBox>+595 983 102765</S.TextBox>
        </S.Location>
      </S.CoverImage>
    </S.Wrapper>
  );
};

export default Gallery;
