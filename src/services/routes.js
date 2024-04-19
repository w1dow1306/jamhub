import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Chat from '../components/chat'
import {Todos} from '../components/todos'
export const router = createBrowserRouter([
    {
        path: "/app",
        element: <App />,
        children: [
            {
                path: "/app/codespace",
                element: <><div>This is code spacc</div></>,
            },
            {
                path: "/app/chat",
                element: <Chat />,
            },
            {
                path: "/app/battle",
                element: <><div>This is code battle</div></>,
            },
            {
                path: "/app/call",
                element: <><div>This is code call</div></>,
            },
            {
                path: "/app/gallery",
                element: <><Todos /></>,
            },
            {
                path: "/app/",
                element: <><div>This is Home</div></>,
            },
        ],
    },
    {
        path: "/codespace",
        element: <>This is coding</>
    },
    {
        path: "/",
        element: <><App /></>
    },
])
