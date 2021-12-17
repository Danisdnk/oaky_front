
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/atoms/Navbar';
import { LoginScreen } from '../components/Login/LoginScreen';
import { RegisterForm } from '../components/Login/RegisterForm';
import { PasswordReset } from '../components/Login/PasswordReset';
import { DashboardRoutes } from './DashboardRoutes';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ChangePassword } from '../components/Login/ChangePassword';
import { VerifyPasswordReset } from './../components/Login/VerifyPasswordReset';
export const AppRouter = () => {

    const dispatch = useDispatch();

    // const { checking, uid } = useSelector( state => state.auth);

    // useEffect(() => {

    //     dispatch( startChecking() );

    // }, [dispatch])

    // if ( checking ) {
    //     return (<h5>Espere...</h5>);
    // }

    return (

        <Router>
            <div>
                <Switch>

                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/register" component={RegisterForm} />

                    <Route exact path="/password-reset" component={PasswordReset} />
                    <Route exact path="/reset-code:email" component={VerifyPasswordReset} />
                    <Route exact path="/change-password:email" component={ChangePassword} />
                    <Route path="/" component={DashboardRoutes} />

                </Switch>
            </div>
        </Router>
    );
}
