import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setNames([...names, name]);
      setName('');
    }
  };

  return (
    <div className="App">
      <h1 className='mx-2 my-2 w-full text-center text-yellow-600'>Name Card App</h1>
      <form onSubmit={handleSubmit} className='w-full flex flex-col space-y-2 justify-center content-center items-center'>
        <input
          className='w-50 h-100 mx-1 my-1 text-center text-green-600 outline-2 border border-blue-600'
          type="text"
      
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit" className="w-20 bg-blue-400 rounded-lg ">Submit</button>
      </form>
      <div className="w-full flex flex-row gap-2 items-center mt-3">
        {names.map((submittedName, index) => (
          <div className="w-3/12 border border-gray-500 h-[200px] text-center justify-center content-center" key={index}>
            <h2>{submittedName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
