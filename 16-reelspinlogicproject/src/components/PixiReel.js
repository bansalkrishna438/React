import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { tweenTo, backout } from './useReelSpin'; // Adjust the path accordingly

const PixiReel = () => {
  const pixiContainer = useRef(null);

  useEffect(() => {
    let app = new PIXI.Application({ background: '#1099bb', resizeTo: window });
    pixiContainer.current.appendChild(app.view);

    PIXI.Loader.shared
      .add([
        'https://pixijs.com/assets/eggHead.png',
        'https://pixijs.com/assets/flowerTop.png',
        'https://pixijs.com/assets/helmlok.png',
        'https://pixijs.com/assets/skully.png',
      ])
      .load(onAssetsLoaded);

    const REEL_WIDTH = 160;
    const SYMBOL_SIZE = 150;

    function onAssetsLoaded(loader, resources) {
      const slotTextures = [
        resources['https://pixijs.com/assets/eggHead.png'].texture,
        resources['https://pixijs.com/assets/flowerTop.png'].texture,
        resources['https://pixijs.com/assets/helmlok.png'].texture,
        resources['https://pixijs.com/assets/skully.png'].texture,
      ];

      const reels = [];
      const reelContainer = new PIXI.Container();

      for (let i = 0; i < 5; i++) {
        const rc = new PIXI.Container();
        rc.x = i * REEL_WIDTH;
        reelContainer.addChild(rc);

        const reel = {
          container: rc,
          symbols: [],
          position: 0,
          previousPosition: 0,
          blur: new PIXI.filters.BlurFilter(),
        };

        reel.blur.blurX = 0;
        reel.blur.blurY = 0;
        rc.filters = [reel.blur];

        for (let j = 0; j < 4; j++) {
          const symbol = new PIXI.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);
          symbol.y = j * SYMBOL_SIZE;
          symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
          symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
          reel.symbols.push(symbol);
          rc.addChild(symbol);
        }

        reels.push(reel);
      }

      app.stage.addChild(reelContainer);

      const margin = (app.screen.height - SYMBOL_SIZE * 3) / 2;

      reelContainer.y = margin;
      reelContainer.x = Math.round(app.screen.width - REEL_WIDTH * 5);

      const top = new PIXI.Graphics();
      top.beginFill(0, 1);
      top.drawRect(0, 0, app.screen.width, margin);

      const bottom = new PIXI.Graphics();
      bottom.beginFill(0, 1);
      bottom.drawRect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin);

      const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'],
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
      });

      const playText = new PIXI.Text('Spin the wheels!', style);
      playText.x = Math.round((bottom.width - playText.width) / 2);
      playText.y = app.screen.height - margin + Math.round((margin - playText.height) / 2);
      bottom.addChild(playText);

      const headerText = new PIXI.Text('PIXI MONSTER SLOTS!', style);
      headerText.x = Math.round((top.width - headerText.width) / 2);
      headerText.y = Math.round((margin - headerText.height) / 2);
      top.addChild(headerText);

      app.stage.addChild(top);
      app.stage.addChild(bottom);

      bottom.interactive = true;
      bottom.cursor = 'pointer';
      bottom.on('pointerdown', startPlay);

      let running = false;

      function startPlay() {
        if (running) return;
        running = true;

        for (let i = 0; i < reels.length; i++) {
          const r = reels[i];
          const extra = Math.floor(Math.random() * 3);
          const target = r.position + 10 + i * 5 + extra;
          const time = 2500 + i * 600 + extra * 600;

          tweenTo(r, 'position', target, time, backout(0.5), null, i === reels.length - 1 ? reelsComplete : null);
        }
      }

      function reelsComplete() {
        running = false;
      }

      app.ticker.add(() => {
        for (let i = 0; i < reels.length; i++) {
          const r = reels[i];
          r.blur.blurY = (r.position - r.previousPosition) * 8;
          r.previousPosition = r.position;

          for (let j = 0; j < r.symbols.length; j++) {
            const s = r.symbols[j];
            const prevy = s.y;

            s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
            if (s.y < 0 && prevy > SYMBOL_SIZE) {
              s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];
              s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
              s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
            }
          }
        }
      });
    }
  }, []);

  return <div ref={pixiContainer}></div>;
};

export default PixiReel;
