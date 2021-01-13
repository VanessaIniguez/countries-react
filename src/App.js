import './App.css';
import Filter from './components/filter/Filter';
import { Navbar } from './components/navbar';


function App() {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <Filter />
      </div>
      
     
    </>
  );
}

export default App;
