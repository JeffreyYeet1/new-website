import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Introduction from './components/introduction';
import FooterBar from './components/footerbar';

const App: React.FC = () => {
  return(
    <div>
      <Introduction />
      <Navigation />
      <FooterBar />
    </div>
  );
}

export default App;