import Header from "./Components/Header/Header";
import Title from "./Components/Title/Title";
import HeaderText from "./Components/HeaderText/HeaderText";
import Main from "./Components/Main/Main";
import Weniv from './img/weniv.png';
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
      <div className="footer">
        <img src={Weniv} alt="" />
        <p className="footerInfo">※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br/> 수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
        </div>
    </section>
    
    </body>
    
    </>
  );
}
export default App;
