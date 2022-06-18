import React from 'react';
import Footer from './components/Footer';
import MainRoutes from './components/MainRoutes';
import Navbar from './components/Navbar';

//documentation on api to play around with
//redux brush up (important)
//landing page

const App: React.FC = () =>  {
  return (
    <main>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </main>
  );
}

export default App;
