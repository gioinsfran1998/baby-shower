import React, { FC } from 'react';
import * as S from './style';

const Layout: FC = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Responsive>{children}</S.Responsive>
    </S.Wrapper>
  );
};

export default Layout;
