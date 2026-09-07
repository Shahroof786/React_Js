import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  let [counter,setCounter] = useState(5)
  const increasevalue = ()=> {
    counter = counter+1
    setCounter(counter)
    console.log(counter)
  }

  const removeval = ()=> {
    if(counter != 0)
    {
      counter = counter - 1
    }
    setCounter(counter)
  }

  let myobj = {
      myname:'Shaan',
      myid:7
    }
  return (
    <>
      <h1>This is my React</h1>
      <h2>Counter Values: {counter}</h2>
      <button onClick={increasevalue}>Increase Value</button><br/>
      <button onClick={removeval}>Decrease Value</button>
      <ProfileCard myname = "Shaan" btntext="Click here"/>
      <ProfileCard myname = "Shanu" btntext="Visit me"/>
    </>
  )
}

export default App
