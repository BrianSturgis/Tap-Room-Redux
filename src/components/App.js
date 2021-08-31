import React from "react";
import KegControl from "./KegControl";
import Header from "./Header";


function App(){
  return (
    <React.Fragment>
          <Header />
      <div className="container">
        <div className="footer">
          <KegControl />
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;