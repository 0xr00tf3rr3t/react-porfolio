import {BrowserRouter,Route, Switch} from  'react-router-dom'
import React from 'react';
import App from './App'
import NotFound from "./Components/NotFound";
import Home from "./Components/Home/Home"
import Projects from "./Components/Projects/Projects";
const Router = ()=> (
    <BrowserRouter>
        <Switch>
            <Route  exact path={'/'} component={App}/>
            <Route path ={'/Projects/:projectID'} component={Projects}/>
            <Route exact path ={'/Projects'} component={Projects}/>
            {/*<Route  path={'/store/:storeId'} component={App}/>*/}
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router