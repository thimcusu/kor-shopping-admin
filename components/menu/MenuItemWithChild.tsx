import { MenuChildProps } from '@/types/menu';
import React from 'react';

const MenuItemWithChild = (props: MenuChildProps) => {
  const { title, route, link, activePath, icon, customClass, customLinkClass, labelClass, activeRegex, query, as } = props;
  const Icon = icon;

  return <div>MenuItemWithChild</div>;
};

export default MenuItemWithChild;
