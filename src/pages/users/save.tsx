import { useRouter } from 'next/router';

import React, { Fragment } from 'react';

import FormUser from '@/components/Shared/FormUser/FormUser';
import Layout from '@/components/Shared/Layout/Layout';
import { NEW_USER } from '@/queries/user';
import { useMutation } from '@apollo/client';
import { notification } from 'antd';

import * as S from './style';

const Save = () => {
  const router = useRouter();
  const [newUser, { loading }] = useMutation(NEW_USER);

  const handleSubmit = async (values: any) => {
    try {
      const response = await newUser({
        variables: {
          input: {
            ...values
          }
        }
      });

      console.log('response', response);
      notification.success({
        message: 'Exito!',
        description: 'Usuario creado con exito'
      });
    } catch (e) {
      notification.error({
        message: 'Error',
        description: e.message
      });
    }
  };

  return (
    <Fragment>
      <S.Header
        className='site-page-header-responsive'
        onBack={() => window.history.back()}
        title='Crear Usuario'
      />

      <FormUser onLoading={loading} handleSubmit={handleSubmit} />
    </Fragment>
  );
};
Save.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Save;
