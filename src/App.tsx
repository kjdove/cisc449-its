// import { useState } from 'react'

import './App.css'
import { Dashboard } from './Dashboard'
import { StartPage } from './StartPage'

function App() {
  
  //get pretest completion status from local storage (boolean)
  const pretestCompleted = localStorage.getItem("pretestCompleted");

  { /**if pretest completed, '/' to be dashboard */}
 
  return (
    <>
    {pretestCompleted === "true" ? 
      <Dashboard /> : <StartPage/>
    }

    </>
  )
}

export default App
