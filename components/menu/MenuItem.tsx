import { MenuChildProps } from '@/types/menu';
import React from 'react';
import Link from 'next/link';
import MenuLink from './MenuLink';

const MenuItem = (props: MenuChildProps) => {
  const {
    title,
    route,
    link,
    activePath,
    icon,
    customClass,
    customLinkClass,
    customIconClass,
    labelClass,
    isExpanded,
    activeRegex,
    query,
    as,
  } = props;
  const isActiveItem = route.indexOf(activePath) >= 0 || (route === '/' && activePath === '/dashboard');
  return (
    <li
      className={`${customClass || ''}${
        isActiveItem ? 'text-primary ' : ' '
      }flex mx-3 mb-1 rounded-md transition duration-200 ease-out hover:bg-primary/[.3] hover:text-primary-dark`}
    >
      {link ? (
        <Link href={{ pathname: link, query }}>
          <MenuLink
            icon={icon}
            customClass={customLinkClass}
            customIconClass={customIconClass}
            activePath={activePath}
            active={isActiveItem}
            labelClass={labelClass}
            title={title}
            link={link}
            isExpanded={isExpanded}
          />
        </Link>
      ) : (
        <MenuLink
          icon={icon}
          customClass={customClass}
          customIconClass={customIconClass}
          activePath={activePath}
          active={isActiveItem}
          labelClass={labelClass}
          title={title}
          link={link}
          isExpanded={isExpanded}
        />
      )}
    </li>
  );
};

export default MenuItem;
