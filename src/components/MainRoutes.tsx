import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import LandingPage from './LandingPage'
// import PageNotFound from './PageNotFound'
import ProfilePage from './ProfilePage'

const MainRoutes: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/RCNLandingPage' element={<LandingPage/>}/>
                <Route path='/dashboard' element={<DashboardPage/>}/>
                <Route path='/profile/:userName' element={<ProfilePage/>}/>
                {/* <Route path='*' element={<PageNotFound/>}/> */}
            </Routes>
        </div>
    )
}

export default MainRoutes