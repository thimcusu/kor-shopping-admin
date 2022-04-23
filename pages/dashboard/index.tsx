import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import HeadHTML from '@/components/layout/headHtml';
import MainLayout from '@/components/layout/mainLayout';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FiUser, FiFileText, FiDollarSign } from 'react-icons/fi';
import withAuth from '@/components/HOCs/withAuth';
import Transaction from './Transaction';

ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  loading: boolean;
};

enum CheckReduceIncrease {
  REDUCE,
  INCREASE,
  EQUAL,
}

export const options: any = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      max: 9000,
      min: 0,
      ticks: {
        stepSize: 1000,
        font: {
          size: 14,
          color: 'red',
        },
        callback: (v): String => `$${v}`,
      },
    },
  },
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Dataset 1',
      // data: [
      //   { x: 1000, y: 1000 },
      //   { x: 1000, y: 2500 },
      //   { x: 1000, y: 4000 },
      //   { x: 1000, y: 3155 },
      //   { x: 1000, y: 4300 },
      //   { x: 1000, y: 5255 },
      //   { x: 1000, y: 4200 },
      //   { x: 1000, y: 3600 },
      //   { x: 1000, y: 4500 },
      //   { x: 1000, y: 6000 },
      //   { x: 1000, y: 7200 },
      //   { x: 1000, y: 8500 },
      // ],
      data: [1000, 2500, 4000, 3155, 4300, 5255, 4200, 3600, 4500, 6000, 7200, 8500],
      fill: true,
      borderColor: '#BC4A4A',
      backgroundColor: '#E5E7F4',
      tension: 0.1,
    },
  ],
};

const Dashboard = (props: Props) => {
  return (
    <MainLayout customClass="dashboard-page" headData={{ title: 'Dashboard' }}>
      <h1 className="mb-[34px] text-3xl font-semibold">Dashboard</h1>
      <div className="mb-[48px] flex max-w-[1120px] justify-between space-x-[50px] ">
        <Transaction
          Icon={FiUser}
          DolaSign={true}
          checkReduceIncrease={CheckReduceIncrease.INCREASE}
          price={23}
          name={'transaction'}
          value={1}
        />
        <Transaction
          Icon={FiDollarSign}
          DolaSign={false}
          checkReduceIncrease={CheckReduceIncrease.REDUCE}
          price={23}
          name={'Total users'}
          value={1}
        />
        <Transaction
          Icon={FiFileText}
          DolaSign={true}
          checkReduceIncrease={CheckReduceIncrease.INCREASE}
          price={23}
          name={'Total  transaction '}
          value={1}
        />
      </div>
      <div className="max-w-[900px] rounded-[15px] bg-white pl-[50px] pt-[24px]">
        <div className="mb-[46px]">
          <p className="mb-[20px] leading-[22px] text-[#949DAF]">Total transaction fees</p>
          <div className="flex space-x-[20px]">
            <h2 className="mb-[20px] flex items-center text-[45px] font-bold leading-[56px]">
              <FiDollarSign className="ml-[-9px]" />
              28
            </h2>
            <p className="mb-[10px] flex items-center text-[#6DCD9F]">
              <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-t-[15px] border-solid border-red-600 border-r-transparent border-l-transparent"></div>
              <span className="ml-[10px] ">{23 + '%'}</span>
            </p>
          </div>
          <p className="text-[#BDBDBD]">March 11 2022</p>
        </div>
        <div className="max-w-[811px] text-lg">
          <Line options={options} data={data} height={118} />
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
