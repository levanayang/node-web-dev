import React from 'react';
import { Switch, Route } from 'react-router'

// webapp page components
import Home from '../Homepage/Home';
import About from '../About/About'
import Projects from '../CSProjects/Projects'
import Links from '../Links/Links'

const Routes = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/links">
                <Links/>
            </Route>
        </Switch>
    )
};

// export the routes to be made available to other components
export default Routes

