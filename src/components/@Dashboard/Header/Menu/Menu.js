import React from 'react';

import { useAuth, useRequest, useRedirect } from 'src/hooks';
import Menu, { MenuItem, MenuLink, RouteLink } from '@/Menu';

const DashboardHeaderMenu = () => {
  const auth = useAuth();
  const redirect = useRedirect('/');
  const [logoutRequest, canLogout] = useRequest();

  const logout = () => {
    // Метож then должен обязательно вызываться, 
    // иначе canLogout будет статичным значением.
    logoutRequest.bind(auth.logout())
      .then(() => redirect());
  };

  const handleLogoutLinkClick = e => {
    e.preventDefault();
    canLogout && logout();
  };

  return (
    <Menu>
      <MenuItem>
        <RouteLink to="/dashboard/settings">
          Настройки
        </RouteLink>
      </MenuItem>

      <MenuItem>
        <MenuLink onClick={handleLogoutLinkClick}>
          Выйти
        </MenuLink>
      </MenuItem>
    </Menu>
  );
};

export default DashboardHeaderMenu;