import { useContext } from 'react';
import './static/css/App.css';
import Greet from './components/greet';
import Main from './components/main';
import { Curruser } from './services/contexts';



function App() {
  const user = useContext(Curruser);
  return (
    <>
      {(user.logged) ?
        <Main /> : <Greet />
  }
        </>
  );
}

      export default App;
