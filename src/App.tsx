import { useState } from 'react';
import Check from './components/Checkbox/Check';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
      <Dropdown selected={selected} setSelected={setSelected} />
      <Check />
    </div>
  );
}

export default App;
