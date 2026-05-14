import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router-dom";
import { Pretest } from './Pretest/PretestPage.tsx';
import { Dashboard } from './Dashboard.tsx';
import { Module1 } from './module1/Module1.tsx';
import { Module2 } from './module2/Module2.tsx';
import { Module3 } from './module3/Module3.tsx';
import { M2EndQuiz } from './module2/M2End.tsx';
import { M1EndQuiz } from './module1/M1End.tsx';
import { M3EndQuiz } from './module3/M3End.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <HashRouter>
        <Routes>
          <Route path= "/" element={<App />} />
          <Route path= "/pretest" element={<Pretest/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/module1" element={<Module1/>} />
          <Route path="/module1/:topicId" element={<Module1 />} />   
          <Route path="/module1/endquiz" element={<M1EndQuiz />} />    
          <Route path="/module2" element={<Module2/>} />
          <Route path="/module2/:topicId" element={<Module2 />} /> 
          <Route path="/module2/endquiz" element={<M2EndQuiz />} />               
          <Route path="/module3" element={<Module3/>} />
          <Route path="/module3/:topicId" element={<Module3 />} /> 
          <Route path="/module3/endquiz" element={<M3EndQuiz />} />
        </Routes>
      </HashRouter>
  </StrictMode>,
)
