import React from 'react';
import StartingStack from './navigations/StartingStack';
import { ResProvider } from './ResContext';

export default function App() {

  return(
      <ResProvider>
        <StartingStack/>
      </ResProvider>
  )
}