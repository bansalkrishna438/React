import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';

const SlotReel = ({ symbols, width, height, spinning, lastSymbolAdd}) => {
  const reelRef = useRef(null);
  const reelContainerRef = useRef(null);


  useEffect(() => {
    const app = new PIXI.Application({
      width:180,
      height:350,
      background:0xfffff,
    });
    reelRef.current.appendChild(app.view);
    const reelContainer = new PIXI.Container();
    reelContainerRef.current = reelContainer;
    app.stage.addChild(reelContainer);
    symbols.forEach((symbol, index) => {
      const texture = PIXI.Texture.from(symbols[Math.floor(Math.random()* symbols.length)]);
      const sprite = new PIXI.Sprite(texture);
      sprite.anchor.set(0.5);
      sprite.scale.set(0.6,0.4)
      sprite.x = (index * width / symbol.length)+90;
      sprite.y = (index * height / symbols.length)+75;
      reelContainer.addChild(sprite);
    });

    return () => {
      app.destroy(true, true);
    };
  }, [symbols, width, height]);

  useEffect(() => {
    if (spinning) {
      const reelContainer = reelContainerRef.current;

      gsap.fromTo(reelContainer,
        {y:0}, 
        {
        y: `+=${height + 85}`,
        duration: 5,
        ease:"circ.Out",
        repeat:-1,
        onUpdate:()=>{
          const texture1 = PIXI.Texture.from(lastSymbolAdd);
          const sprite1 = new PIXI.Sprite(texture1);
          sprite1.anchor.set(0.5);
          sprite1.x = 90;
          sprite1.y =0;
          sprite1.scale.set(0.6,0.4)
          reelContainer.addChild(sprite1);
        }
        });
    } else {
      gsap.killTweensOf(reelContainerRef.current);
    }

  }, [spinning,height,lastSymbolAdd]);

  return <div ref={reelRef} className="spin"/>;
};

export default SlotReel;
