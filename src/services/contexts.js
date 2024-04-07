import Cookies from "js-cookie";
import {createContext, useEffect, useState } from "react";

export const Curruser = createContext();


const Userstate = (props) => {
    const [token, seTtoken] = useState(Cookies.get('token')); // what is the auth token!
    const [logstate, setstate] = useState(!!Cookies.get('token'));  // is the user logged?
    const [username, setusername] = useState(Cookies.get('username'));
    
    /// For each user!!! creating a user object
    const user = {
        token: token,
        username: username,
        logged: logstate,
        
    }

    useEffect(() => {
        function handleCookieChange() {
            seTtoken(Cookies.get('token'));
            setusername(Cookies.get('username'));
            if (Cookies.get('token')) {
                // console.log("Cookies present!");
                setstate(true);
            } else {
                // console.log("Cookie is absent");
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
        <Curruser.Provider value={user}>
        {props.children}
        </Curruser.Provider>
    </>)
}
export default Userstate;