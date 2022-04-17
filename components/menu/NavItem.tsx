import React from 'react';

type NavItemProps = {
  Icon?: any;
  label?: string;
  href?: string;
};

const NavItem = ({ Icon, label, href }: NavItemProps) => {
  return (
    <li
      className="relative mx-2 cursor-pointer overflow-hidden rounded-full bg-white fill-white p-3 
    transition-colors duration-200 after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:animate-[spread_0.3s_ease-in-out] after:rounded-full after:content-[''] hover:fill-yellow hover:text-yellow hover:after:z-10 hover:after:block hover:after:h-full hover:after:w-full hover:after:bg-primary"
    >
      {Icon && (
        <span className="text-inherit">
          <Icon className="relative z-20 h-5 w-5 fill-inherit" />
        </span>
      )}
      {label && <span>{label}</span>}
    </li>
  );
};

export default NavItem;
