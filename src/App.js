import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Mybutton } from './external_UI_componenet'

function formatName(user){
  return user.first_name + ' ' + user.last_name;
}

function App() {
  
  const user = { first_name  : "Vishal", last_name : "Thakkar"}
  const [count, setCount] = useState(0)
  function handleClick()
    {
      setCount(count+1)
    }
  return (
    <div >
      <h1>Hello {formatName(user)}!!!!</h1>
      <Mybutton  count={count} onclick={handleClick}/>
      <h3>Number of Time you pressed the Button: {count}</h3>    
    </div>
  );
}

export default App;
