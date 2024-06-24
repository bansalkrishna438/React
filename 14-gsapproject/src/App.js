// App.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const AnimatedComponent = () => {
  const boxRef = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  const boxRef6 = useRef(null);
  const boxRef7 = useRef(null);
  const boxRef8 = useRef(null);
  const boxRef9 = useRef(null);
  const boxRef10 = useRef(null);
  const boxRef11 = useRef(null);

  useEffect(() => {
    // Animate the box element
    gsap.to(boxRef9.current, { rotation: 360, y: -100,yoyo:true, duration: 0.8,repeat:-1 });
    gsap.to(boxRef10.current, { rotation: 360, y: -100,yoyo:true, duration: 0.8,repeat:-1 });
    gsap.to(boxRef11.current, { rotation: 360, y: -100, yoyo:true,duration: 0.8,repeat:-1 });
    gsap.to(boxRef.current, { rotation: 360, x: 100,yoyo:true, duration: 0.8,repeat:-1 });
    gsap.to(boxRef1.current, { rotation: 360, x: 100,yoyo:true, duration: 0.8,repeat:-1 });
    gsap.to(boxRef2.current, { rotation: 360, x: 100,yoyo:true, duration: 0.8,repeat:-1 });
    gsap.to(boxRef3.current, { rotation: 360, x: -100,yoyo:true, duration: 0.8,repeat:-1 });
    gsap.to(boxRef4.current, { rotation: 360, x: -100,yoyo:true, duration: 0.8,repeat:-1 });
    gsap.to(boxRef5.current, { rotation: 360, x: -100, yoyo:true,duration: 0.8,repeat:-1 });
    gsap.to(boxRef6.current, { rotation: 360, y: 100, yoyo:true,duration: 0.8,repeat:-1 });
    gsap.to(boxRef7.current, { rotation: 360, y: 100,yoyo:true, duration: 0.8,repeat:-1 });
    gsap.to(boxRef8.current, { rotation: 360, y: 100,yoyo:true, duration: 0.8,repeat:-1 });
  }, []);

  return (
  <>
  <div className='bg-black border-8 border-red-600 border-dashed w-1/2 items-center justify-center'>
    <div  className='flex mt-0 p-0 justify-center items-center content-center'>
      <div className='flex text-center justify-center items-center ver'
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          borderRadius:"50px",
          backgroundColor: 'red',
          margin: '50px',
        }}
      >circle</div>
       <div   className='flex text-center justify-center items-center ver'
        ref={boxRef1}
        style={{
          width: '100px',
          height: '100px',
          borderRadius:"20px",
          backgroundColor: 'red',
          margin: '50px',
        }}
      >Round<br/>Reactangle</div>
       <div   className='flex text-center justify-center items-center ver'
        ref={boxRef2}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          margin: '50px',
        }}
      >Reactangle</div>
    </div>
    <div className='flex  mt-0 p-0 justify-center items-center content-center'>
      <div   className='flex text-center justify-center items-center ver'
        ref={boxRef3}
        style={{
          width: '100px',
          height: '100px',
          borderRadius:"50px",
          backgroundColor: 'red',
          margin: '50px',
        }}
      >circle</div>
       <div   className='flex text-center justify-center items-center ver'
        ref={boxRef4}
        style={{
          width: '100px',
          height: '100px',
          borderRadius:"20px",
          backgroundColor: 'red',
          margin: '50px',
        }}
      >Round<br/>Reactangle</div>
       <div   className='flex text-center justify-center items-center ver'
        ref={boxRef5}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          margin: '50px',
        }}
      >Reactangle</div>
    </div>
    <div className='flex mt-0 p-0 justify-center items-center content-center'>
      <div   className='flex text-center justify-center items-center ver'
        ref={boxRef6}
        style={{
          width: '100px',
          height: '100px',
          borderRadius:"50px",
          backgroundColor: 'red',
          margin: '50px',
        }}
      >circle</div>
       <div   className='flex text-center justify-center items-center ver'
        ref={boxRef7}
        style={{
          width: '100px',
          height: '100px',
          borderRadius:"20px",
          backgroundColor: 'red',
          margin: '50px',
        }}
      >Round<br/>Reactangle</div>
       <div  className='flex text-center justify-center items-center ver'
        ref={boxRef8}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          margin: '50px',
        }}
      >Reactangle</div>
    </div>
    <div className='flex mt-0 p-0 justify-center items-center content-center'>
      <div   className='flex text-center justify-center items-center ver'
        ref={boxRef9}
        style={{
          width: '100px',
          height: '100px',
          borderRadius:"50px",
          backgroundColor: 'red',
          margin: '50px',
        }}
      >circle</div>
       <div   className='flex text-center justify-center items-center ver'
        ref={boxRef10}
        style={{
          width: '100px',
          height: '100px',
          borderRadius:"20px",
          backgroundColor: 'red',
          margin: '50px',
        }}
      >Round<br/>Reactangle</div>
       <div  className='flex text-center justify-center items-center ver'
        ref={boxRef11}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          margin: '50px',
        }}
      >Reactangle</div>
    </div>
  </div>
    </>
  );
};



const App = () => (
  <div>
    <h1 className='text-center text-blue-400 text-6xl'>GSAP Animation in React</h1>
    <AnimatedComponent />
  </div>
);

export default App;
