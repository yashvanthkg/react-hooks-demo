import React from 'react'
import './App.css';
import FocusInput from './components/FoucsInput'
import ClassTimer from './components/ClassTimer';
import Hooktimer from './components/Hooktimer';

function App() {

    return (
    <div className="App">
      <ClassTimer />
      {/* <FocusInput /> */}
      <Hooktimer />
    </div>
  );
}

export default App;
