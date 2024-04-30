import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './styles/reset.js'
import GlobalRoot from './styles/globalRoot.js'
import { BrowserRouter } from 'react-router-dom'
import { EvaluationSheetProvider } from './providers/EvaluationSheetContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalRoot/>
    <Reset/>
    <EvaluationSheetProvider>
    <App />
    </EvaluationSheetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
