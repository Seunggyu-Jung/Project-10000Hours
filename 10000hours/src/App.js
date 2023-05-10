import Header from "./Components/Header/Header";
import Title from "./Components/Title/Title";
import HeaderText from "./Components/HeaderText/HeaderText";
import Main from "./Components/Main/Main";
import Frame from './img/Frame.png';

import "./App.css";

function App() {
  return (
    <>
    <body>
      <div className="title"><img src={Frame} alt="" /></div>
    <Header/>
    <Title/>
    <section className="text">
    <HeaderText />
    <Main/>
    </section>
    
    </body>
    
    </>
  );
}
export default App;
