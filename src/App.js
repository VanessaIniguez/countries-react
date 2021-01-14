import './App.css';
import Countries from './components/countries/Countries';
import Filter from './components/filter/Filter';
import { Navbar } from './components/navbar';


function App() {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <Filter />

        <Countries />
      </div>
      
     
    </>
  );
}

export default App;
