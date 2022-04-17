import MainLayout from '@/components/layout/mainLayout';
import { User } from '@/types/user';
import { GetStaticPaths, GetStaticProps } from 'next';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Api from 'shared/config/api';
import { URL_USERS } from 'shared/constant/endpoints';

type UserIProps = {
  admin: true;
  active: true;
  _id: any;
  email: string;
  user_name: string;
};

const UserDetail = ({ user }: { user: UserIProps }) => {
  return (
    <MainLayout customClass="user-page" headData={{ title: 'User Detail' }}>
      <h1 className="mx-auto">User</h1>
    </MainLayout>
  );
};

export default UserDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await Api.get(URL_USERS);
  const { data }: { data: [] } = res.data;
  const paths = data.map((user: User) => ({
    params: { id: user.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const res = await Api.get(`${URL_USERS}/${params.id}`);
  const { data } = res.data;
  return {
    props: {
      user: data,
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  };
};
