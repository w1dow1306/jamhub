import { io } from "socket.io-client";
import notify from "./notify";
import config from "../config.json";


class ChatUser {
    constructor(usr) {
        //initialisse user
        this.user = usr;
        this.socket = io(`http://${config.chat.host}:${config.chat.port}`, {
            autoConnect: false,
        });
    }

    nmsg(name, msg) {
        //create new message

        var pos = name == this.user.name ? "right" : "left";
        var li = `
        <li class="${pos}" >
        <div class="pfp chat-pfp"></div>
        $<span id="usrnm">${name}</span>:<p class="mesg">${msg}</p>
        </li>
        `;

        return li;
    }

    display() {
        //display user info
        console.log(this.user);
    }

    listeners() {
        this.socket.on("message", (msg) => notify(2, msg));

        this.socket.on("nmsg", ({ msg, name }) => {
            this.showmessage({ msg, name });
        });
    }


    joinroom() {
        this.socket.emit("join-room", this.user.croom,this.user.name);
    }

    sendmessage() {
        const form = document.querySelector("#cht");
        let msg = document.querySelector("#message");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.socket.emit('msg', ({ msg: msg.value, room: this.user.croom, name: this.user.name }));
            msg.value = "";
        });
    }

    showmessage({ msg, name }) {
        //show message
        console.log("newmessage:   ", msg);
        const msglist = document.querySelector("#msgs");
        msglist.innerHTML += this.nmsg(name, msg);
        msglist.scrollTop = msglist.scrollHeight;
    }

    init() {
        this.socket.connect();
        this.sendmessage();
        this.listeners();
        this.socket.emit("register", this.user);
    }
}

export default ChatUser;


