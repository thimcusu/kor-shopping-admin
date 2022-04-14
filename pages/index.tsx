import React from 'react';

import Login from './login';
import { CookiesStorage } from 'shared/config/cookie';
import Dashboard from './dashboard';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from 'next-i18next.config';

const Index = () => (CookiesStorage.authenticated() ? <Dashboard loading={false} /> : <Login />);

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
  },
});