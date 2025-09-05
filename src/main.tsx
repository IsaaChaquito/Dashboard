// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'


// createRoot(document.getElementById('root')!).render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>,
  // )
  
  
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from './App.tsx'

const root: HTMLElement = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
