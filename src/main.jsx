import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <>
    {/* <div className="fixed inset-0 z-[9999] pointer-events-none grid grid-cols-12 xl:px-[187px] xl:gap-[10px] lg:px-[80px] lg:gap-[5px] md:px-[40px] md:gap-[3px] sm:px-[20px] sm:gap-[2px] px-[10px] gap-[1px]">
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-red-500/10 h-full"></div>
            ))}
        </div> */}
    <App />
  </>,
);
