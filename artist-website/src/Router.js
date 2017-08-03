import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ExitTransition } from './components/exit-transition';
import { Sketchbook } from './components/sketchbook';
import { Ipad } from './components/ipad';
import { Phone } from './components/phone';

export const Router = () => (
  <main className="router-main">
    <Switch>
        <Route exact path='/' component={ExitTransition} />
        <Route path='/ipad' component={Ipad}/>
        <Route path='/sketchbook' component={Sketchbook}/>
        <Route path='/phone' component={Phone}/>
    </Switch>
  </main>
);
