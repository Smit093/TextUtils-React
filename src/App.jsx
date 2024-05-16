import { useState } from "react"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(()=>{
      showAlert(null);
    },3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been enabled", 'success');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      showAlert("Dark mode has been dissabled", 'info');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} linkText="Link Text" />
      <Alert alert={alert} />
      <div className="container">
        <Textform showAlert={showAlert} heading="Enter the text to analyze below" />
      </div>
    </>
  )
}

export default App
