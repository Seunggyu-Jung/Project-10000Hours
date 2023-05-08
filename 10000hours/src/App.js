import Header from "./Components/Header/Header";
import Frame from './img/Frame.png';
import Frame12 from './img/Frame1.png';
import "./App.css";

function App() {
  return (
    <>
    <body>
    
    <div className="clock">
      <img src={Frame12} alt="" />
      <div className="title"><img src={Frame} alt="" /></div>
      </div>
    <Header/>
    </body>
    
    </>
  );
}
export default App;
