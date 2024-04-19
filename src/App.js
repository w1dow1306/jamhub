import { useContext } from "react";
import Greet from "./components/greet";
import Main from "./components/main";
import { Curruser } from "./services/contexts";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { user } = useContext(Curruser);
  return <>{user.logged ? <Main /> : <Greet />}<ToastContainer toastStyle={{ backgroundColor: "#103346",color:"white", zIndex:"" }} theme="dark" /></>;
}

export default App;
