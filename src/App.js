import './App.css';
import DisplayIP, { IP_Types } from './components/display-ip/display-ip.component';

function App() {
  return (
    <div className="App">      
        <div style={{display: "grid"}}>
          <DisplayIP type={IP_Types.IPV4}/>
          <DisplayIP type={IP_Types.IPV6}/>
        </div>
    </div>
  );
}

export default App;
