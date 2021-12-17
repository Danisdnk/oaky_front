import { types } from "../types/types";
export const startLogin = (email, password) => {
    return async (dispatch) => {
        console.log(email, password);
        // const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        // const body = await resp.json();

        // if( body.ok ) {
        //     localStorage.setItem('token', body.token );
        //     localStorage.setItem('token-init-date', new Date().getTime() );

        //     dispatch( login({
        //         uid: body.uid,
        //         name: body.name
        //     }) )
        // } else {
        //     Swal.fire('Error', body.msg, 'error');
        // }


    }
}

export const startLogout = () => {
    return (dispatch) => {

      //  localStorage.clear();
        dispatch(logout());
    }
}



const login = (user) => ({
    type: types.authLogin,
    payload: user
});


const logout = () => ({ type: types.authLogout })