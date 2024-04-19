import '../static/css/greet.css'
import config from '../config.json'
import React, { useState } from 'react';
import notify from '../services/notify';
const e = new Event("cookiechanged");


function Signup() {

    const adduser = (e) => {
        e.preventDefault();
        fetch(config.server.url+"/user/add", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            redirect: 'follow',
            body: JSON.stringify(data),
        }
        ).then(res => res.json()).then(res => {
            console.log(res);
            notify(res.code, res.message);
        })
    } 


    const [data, setdata] = useState({
        "name": "",
        "username": "",
        "email": "",
        "password": "",
    })

    const ontype = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata(values => ({ ...data, [name]: value }))
    }
    return (
        <>
            <form onSubmit={adduser}>
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" placeholder="Enter your name here!" value={data.name} onChange={ontype} />
                </label>
                <label htmlFor="uname">
                    Userame:
                    <input type="text" name="username" value={data.username} onChange={ontype} placeholder="What should we call you!" />
                </label>
                <label htmlFor="mail">
                    Email:
                    <input type="email" name="email" value={data.email} onChange={ontype} placeholder="Enter your mail here!" />
                </label>
                <label htmlFor="pass">
                    Password:
                    <input type="Password" name="password" value={data.password} onChange={ontype} placeholder="🤫 It'l be between us!!" />
                </label>
                <button id="btn"  className="name" type='Submit' >Sign up<span></span></button>
            </form>
        </>
    )
}

function SignIn() {
    const login = (event) => {
        event.preventDefault();
        fetch(config.server.url + "/user/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            redirect: 'follow',
            credentials: 'include',
            body: JSON.stringify(data),
        }
        ).then(msg => msg.json()).then(msg => {
            notify(msg.code, msg.message);
            dispatchEvent(e);
        })
    } 


    const [data, setdata] = useState({
        "username": "",
        "password": "",
    })

    const ontype = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata(values => ({ ...data, [name]: value }))
    }

    return (
        <>
            <form onSubmit={login}>
                <label htmlFor="name">
                    Username:
                    <input type="text" name="username" value={data.pass} onChange={ontype} placeholder="Just tell me your username!" />
                </label>
                <label htmlFor="pass">
                    Password:
                    <input type="Password" name="password" value={data.pass} onChange={ontype} placeholder="Do you remeber your pass? 🤔" />
                </label>
                <button id="btn" type="Submit" className="name" >Sign In<span></span></button>
            </form>
        </>
    )
}

function Display() {
    return (
        <>
            <div className='display'><div className="img"></div><div className="text">The art of writing is the art of discovering what you belive!</div></div>
        </>
    )
}

function Greet() {
    const f1 = (btn) => {
        let button = btn.target;
        setx(!x)
        document.querySelectorAll(".cactive").forEach(e => e.classList.remove("cactive"));
        button.classList.toggle("cactive");
    }
    const [x, setx] = useState(true);
    return (
        <>
            <div className="main">
                <Display />
                <div className="container">
                    <button className="sgnup choose cactive" onClick={f1}>Signup </button>
                    <button className="sgnin choose" onClick={f1}>SignIn</button>
                    {x ? <Signup /> : <SignIn />}
                </div>
            </div>
        </>
    );
}
export default Greet;