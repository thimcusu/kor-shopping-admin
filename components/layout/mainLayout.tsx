import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import HeadHTML from './headHtml';
import { HeadProps } from '@/types/headHtml';
import Sidebar from '../menu/Sidebar';
import dynamic from 'next/dynamic';
import { RootState } from '@/redux/rootReducer';
import Topbar from '../menu/Topbar';

type Props = {
  headData?: HeadProps;
  children: any;
  customClass?: string;
  menuExpanded?: boolean;
};

const MainLayout = (props: Props) => {
  const { headData, children, customClass } = props;
  const { isExpanded: menuExpanded }: { isExpanded: boolean } = useSelector((state: RootState) => state.menuReducer);

  const DynamicSideMenu = dynamic(() => import('components/menu/Sidebar'), {
    ssr: false,
  });
  return (
    <>
      <HeadHTML {...headData}></HeadHTML>
      <main
        className={`main-container ${
          customClass || ''
        } h-full min-h-screen bg-background-color text-primary-dark pt-25 transition-width duration-150 ease-out ${menuExpanded ? 'pl-64' : 'pl-20'}`}
      >
        <Sidebar />
        <div id="wrapper" className={`${menuExpanded ? '' : 'sidebar-condensed'}`}>
          <Topbar />
          <div className="container pl-16 ">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

MainLayout.propTypes = {
  menuExpanded: PropTypes.bool,
};

MainLayout.defaultProps = {
  menuExpanded: true,
};

export default MainLayout;
