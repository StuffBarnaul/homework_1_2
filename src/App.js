import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    let [name, setName] = useState('');
    let [sum, setSum] = useState(0);
    const onChangeName = (e) => {
        setName(e.target.value.replace (/\D/, ''));
    }

    useEffect(() => {
        let value;
        name === '' ? value=0 : value=parseInt(name)
        value === 0 ? setSum(0) : setSum((value*(value+1))/2);
    },[name]);

    return (
    <div id="main" className="App">
      <input type="text" value={name} onChange={onChangeName}/>
        <h1>{sum}</h1>
    </div>
  );
}

export default App;
