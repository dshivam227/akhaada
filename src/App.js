import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Hero/Programs/Program';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons';


function App() {
  return (
    <div className="App">
   <Hero/>
   <Program/>
<Reasons/>
<Plans/>
    </div>
  );
}

export default App;
