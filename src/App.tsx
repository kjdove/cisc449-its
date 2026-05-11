import './App.css'
import { Dashboard } from './Dashboard'
import { StartPage } from './StartPage'

function App() {
    const pretestCompleted = localStorage.getItem("pretestCompleted"); 

  return (
    <>
    {pretestCompleted === "true" ? 
      <Dashboard /> : <StartPage/>
    }
    </>
  )
}

export default App
