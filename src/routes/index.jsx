import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import EvaluationSheet from '../pages/EvaluationSheet'
import RegisterPage from '../pages/RegisterPage'
import SociodemograficSheet from '../pages/SociodemograficSheet'
import JointHealthPage from '../pages/JointHealthSheet'

const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/cadastro' element={<RegisterPage/>}/>
            <Route path='/fichaAvaliacao' element={<EvaluationSheet/>}/>
            <Route path='/sociodemografico' element={<SociodemograficSheet/>}/>
            <Route path='/saudeArticular' element={<JointHealthPage/>}/>
        </Routes>
    )

}

export default AppRoutes