import './App.css';
import SearchBar from './SearchBar';
import Cards from './Cards';
import Sidebar from './Sidebar';
import Chart from './Chart';
import Giveaways from './Giveaways';
import LineCharts from './LineCharts';
import BarCharts from './BarCharts';

function App() {
  return (
    <>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '15%' }}>
          <Sidebar />
        </div>
        <div style={{ width: '85%' }}>
          <SearchBar /> <br></br>
          <p>Dashboard</p>
          <p id="dash">hi ameran, welcome back to admin</p> <br></br>
          <Cards />  <br></br>
          <br></br>
          <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '50%' }}>
          <Chart /> 
          </div>
          <br></br>
          <div style={{ width: '50%' }}>
          <Giveaways />
          </div>
          </div>
          <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '60%' }}>
          <LineCharts /> 
          </div>
          <div style={{ width: '50%' }}>
          <BarCharts />
          </div>
     </div>
     
       
          
        </div>
      
      </div>
    </>
  );
}

export default App;
export { SearchBar };
export { Cards };
export {Chart};
export {Giveaways};
export {LineCharts};
export {BarCharts};