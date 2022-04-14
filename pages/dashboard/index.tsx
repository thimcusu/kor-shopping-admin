import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import HeadHTML from '@/components/layout/headHtml';
import MainLayout from '@/components/layout/mainLayout';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import withAuth from '@/components/HOCs/withAuth';

type Props = {
  loading: boolean;
};

const Dashboard = (props: Props) => {
  return (
    <MainLayout customClass="dashboard-page" headData={{ title: 'Dashboard' }}>
      <h1 className="mx-6 text-3xl font-semibold">Dashboard</h1>
    </MainLayout>
  );
};

export default withAuth(Dashboard);

export const getStaticProps: GetStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'login'], nextI18nextConfig)),
  },
});
