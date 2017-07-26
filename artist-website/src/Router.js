import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { TableHome } from './components/table-home';
import { Sketchbook } from './components/sketchbook';
import { Ipad } from './components/ipad';
import { Phone } from './components/phone';

export const Router = () => (
  <main>
    <Switch>
        <Route exact path='/' component={TableHome} />
        <Route path='/ipad' component={Ipad}/>
        <Route path='/sketchbook' component={Sketchbook}/>
        <Route path='/phone' component={Phone}/>
    </Switch>
  </main>
);
