import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import LandingPage from './LandingPage'
import PageNotFound from './PageNotFound'
import ProfilePage from './ProfilePage'

const MainRoutes: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/dashboard' element={<DashboardPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}

export default MainRoutes