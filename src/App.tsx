import { useReducer } from 'react';
import './App.css';
import { DeathNoteContext } from './hook';
import { defState } from './reducer';
import { reducer } from './reducer/reducer';
import { DeathNote } from './ui/screen';

function App() {
  return (
    <DeathNoteContext.Provider value={useReducer(reducer, defState)}>
      <div className="container">
        <DeathNote />
      </div>
    </DeathNoteContext.Provider>
  );
}

export default App;
