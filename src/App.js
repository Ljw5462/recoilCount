import React from 'react';
import ReadOnlyCount from './components/JustRead';
import ReadWriteCount from './components/ReadWriteCount';
import SelectorCount from './components/SelectorCount';



function App() {
  return (
        <>
          <ReadOnlyCount />
            <ReadWriteCount />
          <SelectorCount />
        </>
   
  );
}

export default App;
