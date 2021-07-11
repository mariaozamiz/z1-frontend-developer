import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Scan from './components/Scan';
import Camera from './components/Camera';

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Scan} />
                <Route exact path="/cam" component={Camera} />
            </Switch>
        </div>
    );
}

export default App;
