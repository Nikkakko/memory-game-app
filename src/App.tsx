import { useState } from 'react';
import './App.css';

function App() {
  const [grid, setGid] = useState([
    [3, 5, 2, 7],
    [6, 2, 1, 7],
    [3, 5, 1, 0],
    [6, 4, 0, 4],
  ]);

  return (
    <div className='App'>
      {grid.map((row, i) => (
        <div key={i} className='row'>
          {row.map((col, j) => (
            <div key={j} className='col'>
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
