import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {

  const [alert, setAlert] = useState(null); //alert is an object
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const [mode, setmode] = useState('light');

const ToggleMode=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor = "grey";
    showAlert(":Dark mode has been enabled","success")
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = "white";
    showAlert(":Light mode has been enabled","success")


  }

}

  return (
    <>
  <Navbar  title="Textutils" mode={mode}  ToggleMode={ToggleMode}/>
  <Alert alert={alert}/>
  <TextForm heading="enter text to preview here" showAlert={showAlert} mode={mode}/>
  {/* <About/> */}
  <div className="container my-3 "></div>
  </>
  );
}



export default App;
