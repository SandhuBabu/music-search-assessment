import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MusicContextProvider } from './context/MusicContext.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MusicContextProvider>
      <App />
    </MusicContextProvider>
  </BrowserRouter>
)
