import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Menu, { MenuItem, RouteNavLink } from '@/Menu';
import Icon from '@/Icon';

const DashboardNavMenu = () => {
  const { pathname } = useLocation();

  const isInsidePortfolio = useMemo(() => {
    return ['portfolio', 'work-types']
      .some(item => ~pathname.indexOf(`/dashboard/${item}`));
  }, [pathname]);

  return (
    <Menu>
      <MenuItem>
        <RouteNavLink exact to="/dashboard">
          <Icon glyph="home" /> Панель управления
        </RouteNavLink>
      </MenuItem>

      <MenuItem>
        <RouteNavLink to="/dashboard/profile">
          <Icon glyph="user" /> Мой профиль
        </RouteNavLink>
      </MenuItem>

      <MenuItem>
        <RouteNavLink 
          to="/dashboard/portfolio" 
          isActive={() => isInsidePortfolio}
        >
          <Icon glyph="briefcase" /> Работы
        </RouteNavLink>

        {isInsidePortfolio && (
          <Menu isSubset>
            <MenuItem>
              <RouteNavLink to="/dashboard/portfolio">
                Все работы
              </RouteNavLink>
            </MenuItem>

            <MenuItem>
              <RouteNavLink to="/dashboard/work-types">
                Типы работ
              </RouteNavLink>
            </MenuItem>
          </Menu>
        )}
      </MenuItem>

      <MenuItem>
        <RouteNavLink to="/dashboard/media">
          <Icon glyph="image" /> Медиафайлы
        </RouteNavLink>
      </MenuItem>

      <MenuItem>
        <RouteNavLink to="/dashboard/settings">
          <Icon glyph="settings" /> Настройки
        </RouteNavLink>
      </MenuItem>
    </Menu>
  );
};

export default DashboardNavMenu;