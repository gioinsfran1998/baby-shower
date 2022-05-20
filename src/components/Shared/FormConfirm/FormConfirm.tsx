import React, { FC } from 'react';

import { Form, Field, Formik } from 'formik';
import { initialValues } from './initialValues';
import { schema } from './schema';
import { useMutation } from '@apollo/client';

import * as S from './style';
import { NEW_USER } from '@/queries/user';
import { notification } from 'antd';

export const FormConfirm: FC = () => {
  const [newUser, { loading: loadingAdd }] = useMutation(NEW_USER);

  const handleAddUser = (values: {
    firstName: any;
    lastName: any;
    phoneNumber: any;
  }) => {
    console.log('values', values);
    newUser({
      variables: {
        input: {
          firstName: values?.firstName,
          lastName: values?.lastName,
          phoneNumber: parseInt(values?.phoneNumber)
        }
      }
    })
      .then(() => {
        notification.success({
          message: 'Confirmado!',
          description: 'Presencia registrada.'
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Ops!',
          description: err.message
        });
      });
  };

  return (
    <S.Wrapper>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={async (values) => {
          handleAddUser(values);
        }}
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

              <S.Button type='submit'>
                {loadingAdd ? <S.Loading /> : 'Enviar'}
              </S.Button>
            </Form>
          );
        }}
      </Formik>
    </S.Wrapper>
  );
};

export default FormConfirm;
