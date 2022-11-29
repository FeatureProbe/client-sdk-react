import HocComponent from './components/HocComponent';
import HookComponent from './components/HookComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>FeatureProbe Client SDK for React</div>
      <div>Async Provider</div>
      <HocComponent />
      <HookComponent />
    </div>
  );
}

export default App;
