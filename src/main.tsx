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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <HashRouter>
        <Routes>
          <Route path= "/" element={<App />} />
          <Route path= "/pretest" element={<Pretest/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/module1" element={<Module1/>} />
          <Route path="/module1/topic1" element={<Module1/>} />
          <Route path="/module1/topic2" element={<Module1/>} />
          <Route path="/module1/topic3" element={<Module1/>} />
          <Route path="/module2" element={<Module2/>} />
          <Route path="/module2/topic1" element={<Module2/>} />
          <Route path="/module2/topic2" element={<Module2/>} />
          <Route path="/module2/topic3" element={<Module2/>} />
          <Route path="/module2/topic4" element={<Module2/>} />
          <Route path="/module3" element={<Module3/>} />
          <Route path="/module3/topic1" element={<Module3/>} />
          <Route path="/module3/topic2" element={<Module3/>} />
          <Route path="/module3/topic3" element={<Module3/>} />

        </Routes>
      </HashRouter>
  </StrictMode>,
)
