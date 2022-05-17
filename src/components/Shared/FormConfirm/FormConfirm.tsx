import React, { FC } from 'react';

import { Form, Field, Formik } from 'formik';
import { initialValues } from './initialValues';
import { schema } from './schema';

import * as S from './style';

export interface FormConfirmTypes {
  handleSubmit: (values: Record<string, unknown>) => void;
  loading: boolean;
}

export const FormConfirm: FC<FormConfirmTypes> = (handleSubmit, loading) => {
  return (
    <S.Wrapper>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={async (values) => console.log(values)}
        validationSchema={schema}
      >
        {() => {
          return (
            <Form name='user'>
              <S.InputGroup>
                <Field id='firstName' name='firstName'>
                  {({ field, meta }: any) => (
                    <S.CoverInput>
                      <S.Input type='text' {...field} placeholder='Nombre' />
                      <S.Error>
                        {meta.touched && meta.error && meta.error}
                      </S.Error>
                    </S.CoverInput>
                  )}
                </Field>
              </S.InputGroup>
              <S.InputGroup>
                <Field id='lastName' name='lastName'>
                  {({ field, meta }: any) => (
                    <S.CoverInput>
                      <S.Input type='text' {...field} placeholder='Apellido' />
                      <S.Error>
                        {meta.touched && meta.error && meta.error}
                      </S.Error>
                    </S.CoverInput>
                  )}
                </Field>
              </S.InputGroup>
              <S.InputGroup>
                <Field id='phoneNumber' name='phoneNumber'>
                  {({ field, meta }: any) => (
                    <S.CoverInput>
                      <S.Input
                        type='text'
                        {...field}
                        placeholder='N. de telefono'
                      />
                      <S.Error>
                        {meta.touched && meta.error && meta.error}
                      </S.Error>
                    </S.CoverInput>
                  )}
                </Field>
              </S.InputGroup>

              <S.Button type='submit'>Enviar</S.Button>
            </Form>
          );
        }}
      </Formik>
    </S.Wrapper>
  );
};

export default FormConfirm;
