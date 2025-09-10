import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heads from './components/heads';
import Associates from './components/associates';

function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-y-auto flex flex-col items-center">
      <div className="w-full max-w-6xl px-4">
        <Heads />
        <Associates />
      </div>
    </div>
  );
}

export default App
