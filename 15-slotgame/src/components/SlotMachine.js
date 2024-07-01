import React, { useState } from 'react';
import SlotReel from './SlotReel';
import './SlotMachine.css';
const symbols = [
  'https://pixijs.com/assets/eggHead.png',
  'https://pixijs.com/assets/flowerTop.png',
  'https://pixijs.com/assets/helmlok.png',
  'https://pixijs.com/assets/skully.png'
];

const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  let [lastSymbolAdd, setLastSymbolAdd] = useState([]);

  const handleSpin = () => {
    setSpinning(true);
    setLastSymbolAdd([lastSymbolAdd,...symbols])
    setTimeout(() => {
      setSpinning(false);
      setLastSymbolAdd([])
    }, 2000);
  };

  return (
    <div className="slot-machine">
      <div className="reels">
        <SlotReel symbols={symbols} width={100} height={300} spinning={spinning} lastSymbolAdd={symbols[Math.floor(Math.random()* symbols.length)]}/>
        <SlotReel symbols={symbols} width={100} height={300} spinning={spinning} lastSymbolAdd={symbols[Math.floor(Math.random()* symbols.length)]}/>
        <SlotReel symbols={symbols} width={100} height={300} spinning={spinning} lastSymbolAdd={symbols[Math.floor(Math.random()* symbols.length)]}/>
        <SlotReel symbols={symbols} width={100} height={300} spinning={spinning} lastSymbolAdd={symbols[Math.floor(Math.random()* symbols.length)]}/>
      </div>
      <button onClick={handleSpin} disabled={spinning} className=' bg-white hover:bg-blue-700 rounded-3xl'>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
};

export default SlotMachine;
