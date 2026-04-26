import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router-dom";
import { Pretest } from './Pretest/PretestPage.tsx';
import { Dashboard } from './Dashboard.tsx';
import { Module1 } from './Module1.tsx';
import { Module2 } from './Module2.tsx';
import { Module3 } from './Module3.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <HashRouter>
        <Routes>
          <Route path= "/" element={<App />} />
          <Route path= "/pretest" element={<Pretest/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/module1" element={<Module1/>} />
          <Route path="/module2" element={<Module2/>} />
          <Route path="/module3" element={<Module3/>} />
        </Routes>
      </HashRouter>
  </StrictMode>,
)
