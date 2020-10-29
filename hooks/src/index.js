import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  return (
    <div>
      <HookSwitcher/>
    </div>
  )
}

const HookSwitcher = () => {

  const [ color, setColor ] = useState('blue');
  const [ fontSize, setSize ] = useState(20);

  return  (
      <div style={{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px` }}>
        Hello from hooks
        <button onClick={()=> setColor('black')}>Dark</button>
        <button onClick={()=>setColor('white')}>Light</button>
        <button onClick={() => setSize( (s)=> s+2)}>+2</button>
      </div>
  );
};

ReactDOM.render( <App/>, document.getElementById('root'));