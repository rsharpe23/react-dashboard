import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import DashboardHeader from './Header';
import DashboardNav from './Nav';
import DashboardProfile from './@Profile';
import DashboardWork from './@Work';
import DashboardPortfolio from './@Portfolio';
import DashboardWorkType from './@WorkType';
import DashboardWorkTypes from './@WorkTypes';
import DashboardMedia from './@Media';

import './Dashboard.scss';

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <div className="container-fluid Dashboard">
      <DashboardHeader />

      <div className="row Dashboard-Area">
        <DashboardNav />

        <main className="col-md-9 col-xl-10 ml-auto">
          <div className="pl-lg-5 pr-lg-5">
            {/* Маршруты должны идти в порядке от уникального до более простого, 
            иначе простой будет всегда перехватывать заданный путь. 
            Либо использовать пропс exact (строгое сравнение) для простых маршрутов. */}
            <Switch>
              <Route path={`${path}/profile`}>
                <DashboardProfile />
              </Route>

              {/* Знак вопроса означает что параметр не обязателен */}
              <Route path={`${path}/portfolio/:id?/:viewType`}>
                <DashboardWork />
              </Route>

              <Route path={`${path}/portfolio`}>
                <DashboardPortfolio />
              </Route>

              <Route path={`${path}/work-types/:id?/:viewType`}>
                <DashboardWorkType />
              </Route>

              <Route path={`${path}/work-types`}>
                <DashboardWorkTypes />
              </Route>

              <Route path={`${path}/media`}>
                <DashboardMedia />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;