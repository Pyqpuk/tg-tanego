import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
  useEffect( () => {
    return () => tg.ready();
  }, []);

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">

      <button onClick={onClose}>Закрити</button>
    </div>
  );
}

export default App;
