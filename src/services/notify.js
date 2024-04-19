import { toast } from "react-toastify";
import config from '../config.json'
import "../static/css/notify.css";

const Edit = ({ closeToast, params }) => {
  const title = document.getElementById(params).childNodes[0];
  const desc = document.getElementById(params).childNodes[1];
    const body = document.getElementById(params).childNodes[2];
    

    function updatetask(e) {
        e.preventDefault();
        const t = document.getElementsByName('title')[0].value;
        const d = document.getElementsByName('desc')[0].value;
        const b = document.getElementsByName('body')[0].value;
        const s = document.getElementsByName('status')[0].value;
        const c = document.getElementsByName('complete')[0].checked;
        const data = { title: t, desc: d, body: b, status: s, c: c, t_id: params };

        notify(1, 'todo updated');
        fetch(config.server.url + "/todos/update", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.json()).then(() => setTimeout(() => {
          closeToast()
        }, 1000)).then(() => window.location.reload());
        
        
    }

  return (
    <>
      <div className="edit-container">
        <h3>task_id:{params}</h3>
        <form
          action=""
          className="toast-form"
          id="edit-tsk"
          onSubmit={updatetask}
        >
          <div className="box">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              className="toast-inp"
              placeholder={title.innerText}
            />
          </div>
          <div className="box">
            <label htmlFor="desc">Desc:</label>
            <input
              type="text"
              name="desc"
              className="toast-inp"
              placeholder={body.innerText}
            />
                  </div>
          <div className="box">
            <label htmlFor="body">Body:</label>
            <input
              type="text"
              name="body"
              className="toast-inp"
              placeholder={desc.innerText}
            />
          </div>

                  <div className="box">
                      Status:
                      <select  className="toast-inp" name="status" style={{ fontSize:"medium" }} >
                          <option value={2} className="toast-inp"   >Ongoing</option>
                          <option value={0} className="toast-inp"   >Pending</option>
                          <option value={1} className="toast-inp" >Completed</option>
                      </select>
                      <br />
                      <label htmlFor="status">Completed:</label>
                      <input type="checkbox" name="complete"  className="toast-inp" />
                  </div>
          <input type="submit" className="toast-inp" value="Update"/>
        </form>
      </div>
    </>
  );
};


const Create = ({ closeToast }) => {
  

  function createtask(e) {
    e.preventDefault();
    const t = document.getElementsByName('title')[0].value;
    const d = document.getElementsByName('desc')[0].value;
    const b = document.getElementsByName('body')[0].value;
    const data = { title: t, desc: d, body: b, status: 0, t_id: 12, prior: 0 };
    console.log(data)
    notify(1, 'todo created');

    fetch(config.server.url + "/todos/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json()).then(() => setTimeout(() => {
      closeToast()
    }, 1000)).then(() => window.location.reload());


  }

  return (
    <>
      <div className="edit-container">
        <h3>Create Todo</h3>
        <form
          action=""
          className="toast-form"
          id="edit-tsk"
          onSubmit={createtask}
        >
          <div className="box">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              className="toast-inp"
            />
          </div>
          <div className="box">
            <label htmlFor="desc">Desc:</label>
            <input
              type="text"
              name="desc"
              className="toast-inp"
            />
          </div>
          <div className="box">
            <label htmlFor="body">Body:</label>
            <input
              type="text"
              name="body"
              className="toast-inp"
            />
          </div>
          <input type="submit" className="toast-inp" />
        </form>
      </div>
    </>
  );
}

function notify(type, msg) {
  switch (type) {
    case 3:
      toast.warn(msg);
      break;
    case 2:
      toast.info(msg);
      break;
    case 1:
      toast.success(msg);
      break;
    case "edit":
      toast(<Edit closeToast={toast.dismiss} params={msg} />, {
        autoClose: false,
        position: "top-center",
        className: "edit-task",
      });
      break;
    case "create-todo":
        toast(<Create closeToast={toast.dismiss} />, {
        autoClose: false,
        position: "top-center",
        className: "edit-task",
      });
      break;
    default:
      toast.success("Notifed");
      break;
  }
}

export default notify;
