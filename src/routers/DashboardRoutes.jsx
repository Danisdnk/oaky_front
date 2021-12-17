import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Home } from '../components/Landing/Home'
import { Navbar } from '../components/atoms/Navbar'
import { ChildDashboard } from '../components/ChildDashboard/ChildDashboard'
import { Profile } from '../components/Profile/Profile'
import { Post } from './../components/Posts/Post';
import { PostCollection } from './../components/Posts/PostCollection';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>

                    <Route exact path="/home" component={Home} />
                    <Route exact path="/child-dashboard/:state" component={ChildDashboard} />
                    <Route exact path="/child-dashboard" component={ChildDashboard} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/post" component={Post} />
                    <Route exact path="/post:post" component={Post} />
                    <Route exact path="/news" component={PostCollection} />
            
                    <Redirect to="/home" />
                    {/* <Route exact path="/hero/:heroeId" component={HeroesScreen} /> */}
                </Switch>
            </div>
        </>
    )
}
