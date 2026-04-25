import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router-dom";
import { Pretest } from './PretestPage.tsx';
import { Dashboard } from './Dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <HashRouter>
        <Routes>
          <Route path= "/" element={<App />} />
          <Route path= "/pretest" element={<Pretest/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </HashRouter>
  </StrictMode>,
)
