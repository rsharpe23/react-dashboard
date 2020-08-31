import React from 'react';

import { useRedirect } from 'src/hooks';
import Header from '@/Header';
import DashboardHeaderMenu from './Menu';
import './Header.scss';

const DashboardHeader = () => {
  const redirect = useRedirect('/dashboard');

  const handleLinkClick = e => {
    e.preventDefault();
    redirect();
  };

  return (
    <Header fixed>
      <div className="col-md-3 col-xl-2 Header-Col">
        <a 
          href="#" 
          className="Header-Link" 
          onClick={handleLinkClick}
        >Roman Sharpe</a>
      </div>

      <div className="col-md-9 col-xl-10 Header-Col">
        <DashboardHeaderMenu />
      </div>
    </Header>
  );
};

export default DashboardHeader;