import React, { useEffect, useState } from 'react'
import '../static/css/todos.css'
import Todo from './todo'
import config from '../config.json'
import notify from '../services/notify'
export const Todos = () => {
    const [todos, settodos] = useState([]);

    async function gettodos() {
        try {
            const res = await fetch(config.server.url + "/todos/my", { credentials: 'include' })
            const val = await res.json()
            if (val) {
                settodos(todos => [...todos, ...val]);
            }
        } catch (err) {
            const val = [
                {
                    title: "Title test",
                    desc: "Test description 123",
                    body: "This is body of this test please wait",
                    status: 0
                },
                {
                    title: "Another Title",
                    desc: "Another description",
                    body: "Another body content",
                    status: 1
                },
                {
                    title: "Yet Another Title",
                    desc: "Yet Another description",
                    body: "Yet Another body content",
                    status: 2
                }
            ];
            settodos(todos => [...todos, ...val]);
        }
    }

    useEffect(() => gettodos, []);

    return (
        <>
            <div className="todo-container" onLoad={gettodos}>
                {todos.map((todo, index) => {
                    let p = {
                        x: (Math.floor(Math.random() * 1000)),
                        y: (Math.floor(Math.random() * 500))
                    }
                    return <Todo params={todo} p={p} key={index} />
                })}
                <input type="button" value="Create" className='toast-inp' style={{position:"absolute",top:"0px",width:"10%"}} onClick={()=>{notify('create-todo',9)}}/>
            </div>
        </>
    )
}
