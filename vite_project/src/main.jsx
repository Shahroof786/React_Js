import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
    <h1>My Custom Fucntion !!</h1>
    </div>
  )
}

const myelement= (
  <a href='http://google.com' target='_blank'>Visit Google</a>
)

const reactelement = React.createElement(
  'a',
  {href:'http://google.com', target:'_blank'},
  'Click Here'
)
createRoot(document.getElementById('root')).render(

    <App />
 
)
