import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Hero/Programs/Program';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
}

export default App;
