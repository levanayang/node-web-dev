import React from 'react';
import { Switch, Route } from 'react-router'

// webapp page components
import App from './App';
import About from './About'
import Projects from './Projects'
import Links from './Links'

const Routes = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact component={App}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/projects"} component={Projects}/>
            <Route path={"/links"} component={Links}/>
        </Switch>
    )
}

// export the routes to be made available to other components
export default Routes;

