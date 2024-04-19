import Cookies from "js-cookie";
import {createContext, useEffect, useState } from "react";

export const Curruser = createContext();

const test = {
    token: 12312321,
    logged: true,
    username:"avinash"
}

const Userstate = (props) => {
    const [token, seTtoken] = useState(Cookies.get('token')); // what is the auth token!
    const [logstate, setstate] = useState(!!Cookies.get('token'));  // is the user logged?
    const [username, setusername] = useState(Cookies.get('username'));
    
    /// For each user!!! creating a user object
    const chatuser = {
        token: token,
        name: username,
        rooms:[],
        croom:0,
    }
    
    const user = {
        token: token,
        username: username,
        logged: logstate,
    }
    // const user = test;
    useEffect(() => {
        function handleCookieChange() {
            seTtoken(Cookies.get('token'));
            setusername(Cookies.get('username'));
            if (Cookies.get('token')) {
                setstate(true);
            } else {
                setstate(false);
            }
            console.log(document.cookie);
        }
        window.addEventListener('cookiechanged', handleCookieChange);
        return () => {
            window.removeEventListener('cookiechanged', handleCookieChange);
        };
    }, []);

    return (<>
        <Curruser.Provider value={{user, chatuser}}>
        {props.children}
        </Curruser.Provider>
    </>)
}
export default Userstate;