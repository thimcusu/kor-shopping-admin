import React from 'react';
import Image from 'next/image';
import { FiSettings, FiBell, FiMessageCircle } from 'react-icons/fi';
import SearchBar from '../common/SearchBar';
import NavItem from './NavItem';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducer';

type Props = {};

const Topbar = (props: Props) => {
  const { isExpanded, user } = useSelector((state: RootState) => ({ isExpanded: state.menuReducer.isExpanded, user: state.authReducer.user }));
  return (
    <nav className="container pl-16 sticky top-0">
      <div className="flex h-full items-center justify-between py-6 ">
        <div className="">
          <SearchBar />
        </div>
        <div className="ml-auto">
          <ul className="flex">
            <NavItem Icon={FiMessageCircle} />
            <NavItem Icon={FiBell} />
            <NavItem Icon={FiSettings} />
            <li className="profile-setting flex items-center">
              <div id="me-avatar" className="relative mx-3 cursor-pointer rounded-full bg-white p-3">
                <Image
                  layout="fill"
                  className="pointer-events-none rounded-full object-cover object-center"
                  loader={src => 'https://source.unsplash.com/random/'}
                  src={'https://source.unsplash.com/random/'}
                />
                <div className="z-1 relative h-5 w-5"></div>
              </div>
              <div className="ml-3 flex flex-col justify-between">
                <div className="font-semibold"></div>
                <div className='text-[14px] text-gray-500 font-light'>Admin</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
