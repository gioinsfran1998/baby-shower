import React from 'react';

import FormConfirm from '../FormConfirm/FormConfirm';

import * as S from './style';

const Event = () => {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <S.Wrapper id='third-section'>
      <S.Content>
        <S.Form>
          <S.Title>Confirmar Asistencia</S.Title>
          <FormConfirm />
        </S.Form>
      </S.Content>
      <S.Footer>
        <S.Gio>@insfrangio98</S.Gio>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Event;
