import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import BaseLayout from './layouts/BaseLayout/BaseLayout';
import HomePage from './pages/HomePage/HomePage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import PlanetsPage from './pages/PlanetsPage/PlanetsPage'
import PeoplePage from './pages/PeoplePage/PeoplePage';
import PeopleDetailPage from './pages/PeopleDetailPage/PeopleDetailPage';
import PlanetDetailPage from './pages/PlanetDetailPage/PlanetDetailPage';
import FilmDetailPage from './pages/FilmDetailPage/FilmDetailPage';

function App() {
  return (
    <BrowserRouter>

      <BaseLayout>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/films" component={FilmsPage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/people" component={PeoplePage} />
          <Route path="/peopleDetail/:id" component={PeopleDetailPage} /> 
          <Route path="/planetDetail/:id" component={PlanetDetailPage} />
          <Route path="/filmDetail/:id" component={FilmDetailPage} /> 
        </Switch>

      </BaseLayout>
      
    </BrowserRouter>
  );
}

export default App;
