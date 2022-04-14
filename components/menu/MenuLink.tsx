import { MenuChildProps } from '@/types/menu';
import React from 'react';

interface MenuLinkProps extends MenuChildProps {
  labelClass?: string;
  active: boolean;
}

const WrapperLink = ({
  children,
  customClass,
  active,
  link,
  disabled = false,
}: {
  children: any;
  customClass?: string;
  active?: boolean;
  link: string;
  disabled?: boolean;
}) => (
  <>
    {disabled ? (
      <a href={link} className={`link-item flex-grow py-3 px-4 cursor-pointer whitespace-nowrap ${customClass || ''}`} disabled>
        {children}
      </a>
    ) : (
      <a href={link} className={`link-item flex-grow py-3 px-4 cursor-pointer whitespace-nowrap ${customClass || ''}`}>
        {children}
      </a>
    )}
  </>
);

const MenuLink = ({ icon, customClass, active, customIconClass, labelClass, title, link, isExpanded }: MenuLinkProps) => {
  const WrapperIcon = Icon => (
    <>
      {Icon && (
        <span className="text-left inline-block align-middle mr-3">
          <Icon className={`h-6 w-6 ${customIconClass ||''}`}/>
        </span>
      )}
    </>
  );

  return (
    <WrapperLink customClass={customClass} active={active} link={link}>
      {WrapperIcon(icon)}
      <span className={`font-medium text-md align-bottom ${labelClass || ''} ${isExpanded ? '' : 'invisible'}`}>{title}</span>
    </WrapperLink>
  );
};

export default MenuLink;
