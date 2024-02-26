import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp;

function App() {
  const {onToogleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, []);


  return (
    <div className="App">
        <Header />
        <button onClick={onToogleButton}>toogle</button>
    </div>
  );
}

export default App;
