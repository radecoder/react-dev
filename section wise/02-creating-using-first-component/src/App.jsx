import { Fragment, useState } from 'react';

import Header from './components/Header/Header';

import TabButton from './components/TabButton';
import { EXAMPLES } from './data';
import CoreConcepts from './components/CoreConcepts';

function App() {
  

  return (
    <Fragment>
      <Header />
      <main>
     <CoreConcepts/>
        <EXAMPLES/>
      </main>
    </Fragment>
    
  );
}

export default App;
