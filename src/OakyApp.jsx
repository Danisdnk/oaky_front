
import { useReducer, useEffect } from 'react';
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouters'
import { Provider } from 'react-redux';
import { store } from './store/store';

const init = () => {

    // let returnUrl = localStorage.getItem('user') as string;
    // if (returnUrl) {
    //     returnUrl = localStorage.getItem('user') as string;
    // } else {
    //     returnUrl = { logger: 'false' }; 
    // }

    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}
export const OakyApp = () => {

    // const [user, dispatch] = useReducer(authReducer, {}, init);
   
    // useEffect(() => {
    //     localStorage.setItem('user', JSON.stringify(user));
    // }, [user])

    // return (
    //     <AuthContext.Provider value={{ user, dispatch }}>
    //         <AppRouter />
    //     </AuthContext.Provider >

    // )

    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}

