import React from 'react';
import './login.css';
import {Button} from "@material-ui/core";
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = ()=>{
    const [state,dispatch] = useStateValue();
    const sign_in = ()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            (console.log(result));
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch((error)=>{
            alert(error.message);
        })

    }
    return(
        <>
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack logo"/>
                <h1>Sign in to slack</h1>
                <Button onClick={sign_in} variant="contained"> Sign In with Google</Button>
            </div>
        </div>
        </>
    )
}
export default Login;