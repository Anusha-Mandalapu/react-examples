import React from 'react';
import './App.css';
import { Greet as MyComponent } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      {/*functinonal component example*/}
      <MyComponent />
      {/*class component example*/}
      <Welcome />
      {/*without JSX example*/}
      <Hello />
    </div>
  );
}

export default App;
