import Image from 'next/image';
import React from 'react';

import ballon from 'public/images/ballon1.png';
import china from 'public/images/shoppingChina.png';
import cellshop from 'public/images/cellshop.svg';
import ballon2 from 'public/images/ballon2.png';
import elephant1 from 'public/images/elephant1.png';

import * as S from './style';

const Gifts = () => {
  return (
    <S.Wrapper>
      <S.Extra>
        <Image
          alt='elephant1'
          src={elephant1}
          quality={100}
          height='25'
          width='25'
        />
        <Image
          alt='ballon2'
          src={ballon2}
          quality={100}
          height='25'
          width='25'
        />
        <Image
          alt='elephant1'
          src={elephant1}
          quality={100}
          height='25'
          width='25'
        />
        <Image
          alt='ballon2'
          src={ballon2}
          quality={100}
          height='25'
          width='25'
        />
      </S.Extra>
      <S.Center>
        <S.Title>Lista de Regalos</S.Title>
        <S.CoverImage>
          <Image
            alt='ballon'
            src={ballon}
            quality={100}
            height='100'
            width='100'
            style={{ opacity: 0.8 }}
          />
        </S.CoverImage>
        <S.Text>
          Nuestro mejor regalo es contar su presencia, por lo que les deseamos
          que pasen y disfruten de lo que les tenemos preparados, pero si desean
          regalarle algo especial para la princesa, optamos por seleccionar
          algunas ideas en estas tiendas, de todos modos cualquier otra opcion
          es bienvenida.
        </S.Text>
        <S.Markets>
          <S.ImageContainer>
            <Image
              alt='china'
              src={china}
              quality={100}
              height='40'
              width='100'
            />
          </S.ImageContainer>
          <S.ImageContainer>
            <Image src={cellshop} height='50' width='100' />
          </S.ImageContainer>
        </S.Markets>
      </S.Center>
    </S.Wrapper>
  );
};

export default Gifts;
