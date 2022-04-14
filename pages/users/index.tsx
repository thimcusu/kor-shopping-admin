import withAuth from '@/components/HOCs/withAuth';
import MainLayout from '@/components/layout/mainLayout';
import { User } from '@/types/user';
import { GetStaticPaths, GetStaticProps } from 'next';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Api from 'shared/config/api';
import { URL_USERS } from 'shared/constant/endpoints';

const UserPage = ({ users = [] }: {users: User[]}) => {
  return (
    <MainLayout customClass="user-page" headData={{ title: 'Users' }}>
      <h1 className="mx-auto">User</h1>
      <table className=''>
        <thead>
          <th>Number</th>
          <th>User name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Admin</th>
        </thead>
        <tbody>
          {users.map(user =>(<tr>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.active}</td>
            <td>{user.admin}</td>
          </tr>) )}
        </tbody>
      </table>
    </MainLayout>
  );
};

export default withAuth(UserPage);

export const getStaticProps: GetStaticProps = async ({ locale }: { locale: string }) => {
  const res = await Api.get(URL_USERS);
  const { data } = res.data;
  return {
    props: {
      users: data,
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  };
};