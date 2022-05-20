import Image from 'next/image';
import React from 'react';

import china from 'public/images/shoppingChina.png';
import gap from 'public/images/gap.png';
import ballon2 from 'public/images/ballon2.png';
import carrito from 'public/images/carritoBebe.png';
import babyshop from 'public/images/babyshop.png';

import * as S from './style';

const Gifts = () => {
  return (
    <S.Wrapper>
      <S.Extra>
        <Image
          alt='carrito'
          src={carrito}
          quality={100}
          height='35'
          width='35'
        />
        <Image
          alt='ballon2'
          src={ballon2}
          quality={100}
          height='25'
          width='25'
        />
        <Image
          alt='carrito'
          src={carrito}
          quality={100}
          height='35'
          width='35'
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
        <S.Text>
          Nuestro mejor regalo es contar tu presencia, por lo que les deseamos
          que pasen y disfruten de lo que les tenemos preparados.
          <br />
          Si desean regalarle algo en especial a la princesa, optamos por
          seleccionar algunas ideas en estas tiendas en las cuales ya cuentan
          con la lista de opciones, de todos modos cualquier otra alternativa es
          bienvenida.
        </S.Text>
        <S.Markets>
          <S.ImageContainer>
            <Image
              alt='china'
              src={china}
              quality={100}
              height='45'
              width='135'
            />
          </S.ImageContainer>
          <S.ImageContainer>
            <Image src={gap} height='110' width='110' />
          </S.ImageContainer>
          <S.ImageContainer>
            <Image src={babyshop} height='110' width='130' />
          </S.ImageContainer>
        </S.Markets>
      </S.Center>
    </S.Wrapper>
  );
};

export default Gifts;
