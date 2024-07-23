import React from 'react';
import StartingStack from './navigations/StartingStack';
import { ResProvider } from './ResContext';
import Toast from 'react-native-toast-message';

export default function App() {

  return(
    <>
      <ResProvider>
        <StartingStack/>
      </ResProvider>
      <Toast/>
    </>
  )
}