import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import {route} from './routes';
import './global.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <RouterProvider router={route} />
      </div>
    </div>
  </StrictMode>,
)
