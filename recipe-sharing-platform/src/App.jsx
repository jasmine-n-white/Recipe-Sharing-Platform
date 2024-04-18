import { useState } from 'react'
import Header from './Header'
import Form from './Form'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <>  
      <Header />
      <Form />     
    </>
  )
}

export default App
