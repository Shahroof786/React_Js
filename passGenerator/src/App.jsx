import { useState,useCallback,useEffect, useRef } from 'react'

function App() {
  const [length, setlenth] = useState(8)
  const [numallow, setnumallow] = useState(false)
  const [charallow, setcharallow] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null)

  const passgenrator = useCallback(()=> {
    let pass =""
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    //useRef hook

    if(numallow) str +="0123456789"
    if(charallow) str +="!@#$%^&*()?"

    for(let i=1; i<= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, numallow, charallow, setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  useEffect(()=>{
    passgenrator()
  },[length, numallow, charallow, passgenrator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='Password' readOnly ref={passwordRef}></input>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> {setlenth(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type='checkbox' defaultChecked={numallow} id='numInput' onChange={() =>{setnumallow((prev) => !prev);} }/>
            <label>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type='checkbox' defaultChecked={charallow} id='charInput' onChange={() =>{setcharallow((prev) => !prev);} }/>
            <label>Charactors</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
