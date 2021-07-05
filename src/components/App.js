import React from "react";
import KegControl from "./KegControl";
import './App.css';
import Header from "./Header";

function App(){
  return (
    <React.Fragment>
      <div className="container">
        <div className="content">input new keg</div>
        <div className="footer">
          <h3>input form</h3>
          <KegControl />
          <Header />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
