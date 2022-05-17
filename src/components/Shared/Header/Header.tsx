import Image from 'next/image';

import mayra from 'public/images/mayra.jpg';

import * as S from './style';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Navbar>
        <S.ButtonGroup>
          <S.ButtonLink href='#first-section'>
            <S.LinkTo>Nosotros</S.LinkTo>
          </S.ButtonLink>
          <S.ButtonLink href='#second-section'>
            <S.LinkTo>Ubicación</S.LinkTo>
          </S.ButtonLink>
          <S.ButtonLink href='#third-section'>
            <S.LinkTo>Asistencia</S.LinkTo>
          </S.ButtonLink>
        </S.ButtonGroup>
      </S.Navbar>
      <Image
        alt='woman'
        src={mayra}
        quality={100}
        layout='fill'
        objectFit='cover'
      />
      <S.Text>
        <S.Name>Amaya Insfran</S.Name>
        <S.SubTitle>¡Mi baby shower!</S.SubTitle>
      </S.Text>
    </S.Wrapper>
  );
};

export default Header;
