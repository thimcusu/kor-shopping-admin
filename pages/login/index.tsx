import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiLogIn, FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiAperture, FiUser } from 'react-icons/fi';
import { FcAbout } from 'react-icons/fc';

import { LoginForm } from '@/types/user';
import HeadHTML from '@/components/layout/headHtml';
import { loginUser } from '@/redux/actions';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Login = () => {
  const { t } = useTranslation('login');
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().required(t('email_required')).trim(),
    password: yup.string().required(t('password_required')).trim(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginForm) => {
    dispatch(loginUser({ params: data, callback: previousUrl => Router.push(previousUrl) }));
  };

  useEffect(() => {
    document.querySelector('body')?.classList.add('login-page');
  });

  return (
    <>
      <HeadHTML title="Login page" />
      <div className="bg-transparent h-screen max-w-max flex justify-center items-center mx-auto px-3">
        <div className="mx-auto flex justify-center bg-white rounded-lg">
          <aside className="login-bar flex flex-col m-auto">
            <ul className="nav-list text-center">
              <li className="nav-item active relative p-3 mb-6 group cursor-pointer">
                <FiUser className="mx-auto" />
                <span className="uppercase text-xs leading-5 text-gray-500 opacity-90">Login</span>
              </li>
              <a className="block" href="https://google.com">
                <li className="nav-item relative p-3 mb-6">
                  <FiAperture className="mx-auto" />
                  <span className="uppercase text-xs leading-5 text-gray-500 opacity-90">Website</span>
                </li>
              </a>
              <li className="nav-item relative p-3 mb-6 cursor-pointer">
                <FcAbout className="mx-auto" />
                <span className="uppercase text-xs leading-5 text-gray-500 opacity-90">About</span>
              </li>
            </ul>
          </aside>
          <div className="welcome-login max-w-md shadow-lg transform scale-110 mx-3">
            <div className="bg-blue-600 h-full flex flex-col justify-evenly text-white px-12">
              <div className="px-1">
                <h1 className="font-extrabold text-2xl">{t('title')}</h1>
                <p className="font-extralight text-xl text-gray-100">{t('note')}</p>
              </div>
              <div className="px-1">
                <ul className="flex">
                  <li className="">
                    <button className="p-2">
                      <FiFacebook />
                    </button>
                  </li>
                  <li className="p-2">
                    <button>
                      <FiInstagram />
                    </button>
                  </li>
                  <li className="p-2">
                    <button>
                      <FiTwitter />
                    </button>
                  </li>
                  <li className="p-2">
                    <button>
                      <FiYoutube />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="login-wrapper max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="login-container py-24 px-12">
              <h3 className="mb-7">
                <strong className="text-blue-700 extrabold text-xl">{t('btn_login')} </strong>
                <span className="text-gray-400 opacity-80">{t('sub_title')}</span>
              </h3>
              <div className="input-group relative">
                <input
                  type="text"
                  {...register('email')}
                  placeholder={t('email')}
                  className="w-full px-3 py-2 rounded-sm focus:outline-none focus:ring focus:border focus:ring-blue-600 shadow-lb focus:scale-110"
                  autoComplete="nope"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                <input
                  type="password"
                  {...register('password')}
                  placeholder={t('password')}
                  className="mt-4 w-full px-3 py-2 rounded-sm focus:outline-none focus:ring focus:border focus:ring-blue-600 shadow-lb focus:scale-110"
                  autoComplete="nope"
                />
                {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
              </div>
              <button type="submit" className="mt-10 p-3 block mx-auto bg-blue-800 rounded-full shadow-lb">
                <FiLogIn size="1.3em" className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

export const getStaticProps: GetStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login'], nextI18nextConfig)),
  },
});
