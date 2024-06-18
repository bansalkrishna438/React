import React, { useState } from 'react';
import './App.css'
import GlobalStyle from './globalStyle';
import Tracker from './components/Tracker';

function App() {
  return (
    <>
     <div className='flex justify-center align-middle 
     border border-x-gray-800 border-y-gray-800 w-45 h-400 
     text-green-600 text-4xl'>
      Main</div>
      <GlobalStyle/>
      <Tracker/>
    </>
  )
}

export default App
