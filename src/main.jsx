import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './styles/reset.js'
import GlobalRoot from './styles/globalRoot.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalRoot/>
    <Reset/>
    <App />
  </React.StrictMode>,
)
