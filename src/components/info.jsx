import React, { useContext } from 'react'
import '../static/css/info.css'
import Cookies from 'js-cookie'
import { Curruser } from '../services/contexts'

const Info = () => {
    const user = useContext(Curruser);
    const logout = () => {
        Cookies.remove('token');
        Cookies.remove('username');
        dispatchEvent(new Event("cookieschanged"));
        document.location.reload()
    }
    return (
        <div className="info">
            <div className="pfp"></div>
            <div className="uname"><span>@{user.username}</span></div>
            <div className="music">
                <div className="like"></div>
                <div className="progress"></div>
                <div className="controls">
                    <div className="left"></div>
                    <div className="pause"></div>
                    <div className="right"></div>
                </div>
            </div>
            <div className="logout" onClick={logout}>
                <span style={{ zIndex: 1 }} >Logout</span>
                <div className="outicon"></div>
            </div>
        </div>
    )
}

export default Info;