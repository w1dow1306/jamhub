import { toast } from "react-toastify";

import '../static/css/notify.css'



function notify(type, msg) {
    switch (type) {
        case 3:
            toast.warn(msg);
            break;
        case 2:
            toast.info(msg);
            break;
        case 1:
            toast.success(msg)
            break;
        default:
            toast.success(msg);
    }
}

export default notify;
