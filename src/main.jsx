import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './styles/reset.js'
import GlobalRoot from './styles/globalRoot.js'
import { BrowserRouter } from 'react-router-dom'
import { FormProvider } from './providers/FormContext.jsx'
import { UserProvider } from './providers/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalRoot/>
    <Reset/>
    <BrowserRouter>
    <FormProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </FormProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
