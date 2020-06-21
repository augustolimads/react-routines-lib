import React from 'react';
import GlobalStyles from './styles/global'
import DarkMode from './components/dark-mode'

function App() {
  return (
    <DarkMode>
      <GlobalStyles />
    </DarkMode>
  );
}

export default App;
