import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import HeadHTML from '@/components/layout/headHtml';
import MainLayout from '@/components/layout/mainLayout';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import withAuth from '@/components/HOCs/withAuth';
import Transaction from './Transaction';
import { FiUser, FiFileText, FiDollarSign } from 'react-icons/fi';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  loading: boolean;
};
enum CheckReduceIncrease {
  REDUCE,
  INCREASE,
  EQUAL,
}

const Dashboard = (props: Props) => {
  return (
    <MainLayout customClass="dashboard-page" headData={{ title: 'Dashboard' }}>
      <h1 className="mx-6 mb-[34px] text-3xl font-semibold">Dashboard</h1>
      <div className="mb-[48px] flex max-w-[1120px] justify-between space-x-[50px] ">
        <Transaction Icon={FiUser} checkReduceIncrease={CheckReduceIncrease.INCREASE} price={23} name={'transaction'} value={1} />
        <Transaction Icon={FiDollarSign} checkReduceIncrease={CheckReduceIncrease.REDUCE} price={23} name={'Total users'} value={1} />
        <Transaction
          Icon={FiFileText}
          checkReduceIncrease={CheckReduceIncrease.INCREASE}
          price={23}
          name={'Total  transaction '}
          value={1}
        />
      </div>
      <div className="pl-[50px] pt-[24px]">
        <div>
          <p className="mb-[20px] leading-[22px] text-[#949DAF]">Total transaction fees</p>
          <div className="flex space-x-[20px]">
            <h2 className="mb-[20px]  flex items-center text-[45px] font-bold leading-[56px]">
              <FiDollarSign className="ml-[-9px]" />
              28
            </h2>
            <p className="mb-[10px] flex items-center text-[#6DCD9F]">
              <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-t-[15px] border-solid border-red-600 border-r-transparent border-l-transparent"></div>
              <span className="ml-[10px] ">{23 + '%'}</span>
            </p>
          </div>
          <p>March 11 2022</p>
        </div>
        <div>
          <Line
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Chart.js Line Chart',
                },
              },
            }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Dataset 1',
                  data: [12, 19, 3, 5, 2, 3],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ],
            }}
          />
          ;
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Dashboard);

export const getStaticProps: GetStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'login'], nextI18nextConfig)),
  },
});
