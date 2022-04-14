import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiBox, FiUsers, FiChevronsLeft, FiTag, FiChevronsRight, FiGrid } from 'react-icons/fi';
import { USER_TYPE } from 'shared/constant/common';
import { MenuChildProps } from '@/types/menu';
import MenuItem from './MenuItem';
import MenuItemWithChild from './MenuItemWithChild';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RootState } from '@/redux/rootReducer';
import { useTranslation } from 'next-i18next';
import { setMenuStateExpanded, setMenuStateCollapse } from '@/redux/actions/menuActions';

type Props = {
  currentUser?: any;
};

const Sidebar = (props: Props) => {
  const { currentUser } = props;
  const { isExpanded } = useSelector((state: RootState) => state.menuReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const router = useRouter();
  const { asPath } = router;

  const mainMenu = [
    {
      title: t('dashboard'),
      link: '/dashboard',
      icon: FiBox,
      activePath: '/dashboard',
      roles: [USER_TYPE.ADMIN, USER_TYPE.EDITOR],
    },
    {
      title: t('products'),
      link: '/products',
      icon: FiTag,
      activePath: '/products',
      roles: [USER_TYPE.ADMIN, USER_TYPE.EDITOR],
    },
    {
      title: t('categories'),
      link: '/categories',
      icon: FiGrid,
      activePath: '/categories',
      roles: [USER_TYPE.ADMIN, USER_TYPE.EDITOR],
    },
    {
      title: 'User Management',
      link: '/users',
      activePath: '/users',
      icon: FiUsers,
      roles: [USER_TYPE.ADMIN],
      query: {
        all: true,
      },
      as: '/users',
    },
  ];

  const [menuList, setMenuList] = useState(mainMenu as [MenuChildProps]);

  function handleToggleSidebar(event) {
    event.preventDefault();
    if (isExpanded) {
      dispatch(setMenuStateCollapse());
    } else {
      dispatch(setMenuStateExpanded());
    }
  }

  return (
    <aside id="aside-menu">
      <div
        className={`sidebar-wrapper fixed left-0 top-0 bottom-0 bg-gray-50 transition-width duration-150 ease-out ${
          isExpanded ? 'w-64' : 'w-20'
        }`}
      >
        <div className="sidebar-content">
          <div className="top-brand flex justify-center items-center text-3xl text-center text-primary-dark py-5 mb-4">
            {isExpanded && (
              <Link href="/">
                <a href="/" className="ml-auto">
                  <b>{t('app_name')}</b>
                </a>
              </Link>
            )}
            <button
              className="ml-auto mr-3 px-3 py-2 text-right transition-colors duration-100 hover:text-primary"
              onClick={handleToggleSidebar}
            >
              {isExpanded ? (
                <span className="">
                  <FiChevronsLeft />
                </span>
              ) : (
                <span>
                  <FiChevronsRight />
                </span>
              )}
            </button>
          </div>
          <ul id="sidebar-menu" className="list-none py-3 text-primary-gray">
            {menuList &&
              menuList.map((item: MenuChildProps, index) =>
                item.childItems ? (
                  <MenuItemWithChild
                    key={`${index}_${item.activePath}`}
                    title={item.title}
                    link={item.link}
                    childItems={item.childItems}
                    icon={item.icon}
                    route={asPath}
                    activeRegex={item.activeRegex}
                    roles={item.roles}
                    query={item.query}
                    isExpanded={isExpanded}
                  />
                ) : (
                  <MenuItem
                    key={`${index}_${item.activePath}`}
                    title={item.title}
                    link={item.link}
                    childItems={item.childItems}
                    icon={item.icon}
                    route={asPath}
                    customClass={item.customClass}
                    customIconClass={item.customLinkClass}
                    activePath={item.activePath}
                    activeRegex={item.activeRegex}
                    roles={item.roles}
                    query={item.query}
                    isExpanded={isExpanded}
                  />
                )
              )}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
