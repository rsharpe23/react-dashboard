import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Menu.scss';

const Menu = ({ isSubset, children }) => {
  const className = cx('Menu', {
    'Menu_subset': isSubset,
  });

  return (
    <ul className={className}>
      {children}
    </ul>
  );
};

Menu.propTypes = {
  isSubset: PropTypes.bool,
  children: PropTypes.node,
};

// ===============

const MenuItem = ({ children }) => {
  return (
    <li className="Menu-Item">
      {children}
    </li>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node,
};

// ===============

// const MenuLink = ({ href = '#', isActive, children, ...rest }) => {
//   const className = cx('Menu-Link', {
//     'Menu-Link_active': isActive,
//   });

//   return (
//     <a 
//       {...rest} 
//       href={href} 
//       className={className}
//     >{children}</a>
//   );
// };

const MenuLinkBase = ({ render, ...rest }) => {
  const href = '#';
  const className = 'Menu-Link';
  const activeClassName = `${className}_active`;

  return render({
    href,
    className,
    activeClassName,
    ...rest,
  });
};

MenuLinkBase.propTypes = {
  render: PropTypes.func.isRequired,
};

// ===============

const MenuLink = ({ isActive, children, ...rest }) => {
  return (
    <MenuLinkBase
      {...rest}
      render={({ className, activeClassName, ...props }) => {
        const _className = cx(className, {
          [activeClassName]: isActive,
        });

        return (
          <a
            {...props}
            className={_className}
          >{children}</a>
        );
      }}
    />
  );
};

MenuLink.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

// ===============

const RouteLink = ({ children, ...rest }) => {
  return (
    <MenuLinkBase
      {...rest}
      render={({ activeClassName, ...props }) => (
        <Link {...props}>{children}</Link>
      )}
    />
  );
};

RouteLink.propTypes = {
  children: PropTypes.node,
};

// ===============

const RouteNavLink = ({ children, ...rest }) => {
  return (
    <MenuLinkBase
      {...rest}
      render={props => (
        <NavLink {...props}>{children}</NavLink>
      )}
    />
  );
};

RouteNavLink.propTypes = {
  children: PropTypes.node,
};

// ===============

export default Menu;

export { 
  MenuItem, 
  MenuLink, 
  RouteLink, 
  RouteNavLink,
};