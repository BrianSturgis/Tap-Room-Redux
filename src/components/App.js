import logo from './logo.svg';
import './App.css';

function App(){
  return (
    <React.Fragment>
      <div className="container">
        <div className="content">keg details</div>
        <div className="footer">
          <h3>input form</h3>
          <KegControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
