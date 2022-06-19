import React from 'react';
import Footer from './components/Footer';
import MainRoutes from './components/MainRoutes';

const App: React.FC = () =>  {
  return (
    <main>
      <MainRoutes/>
      <Footer/>
    </main>
  );
}

export default App;
