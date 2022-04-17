import React from 'react';
import { useTranslation } from 'next-i18next';
import { FiSearch } from 'react-icons/fi';

type Props = {};

const SearchBar = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className='relative'>
      <button className='absolute left-4 top-2/4 transform -translate-y-2/4'>
        <span><FiSearch className='h-5 w-5'/></span>
      </button>
      <input className="rounded-full p-4 pl-12 w-[140px] focus:outline-none focus:w-72 transition-width duration-150 ease-out" id="searchBar" type="search" name="search" placeholder={t('search')} autoComplete="off" />
    </div>
  );
};

export default SearchBar;
