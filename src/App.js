import './App.css';
import Carousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <Carousel delay={1000}>
      test
      {42}
        <span>I'm a span</span>
      </Carousel>
    </div>
  );
}

export default App;
