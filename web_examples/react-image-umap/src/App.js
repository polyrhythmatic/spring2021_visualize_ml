import React, { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';

import './App.css';
import Overlay from './Overlay';

function App() {
  const canvas = useRef(null);
  const [ overlay, setOverlay ] = useState(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: canvas.current
    });

    const viewport = new Viewport({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: 1000,
      worldHeight: 1000,
      interaction: app.renderer.plugins.interaction
    });

    app.stage.addChild(viewport);

    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate()

    let positionDict = {}

    fetch('./images.json')
      .then((response) => {return response.json()})
      .then((data) => {
        for(let i = 0; i < data.length; i++) {
          const fileName = data[i].filename.replace(/\//g, '_');
          const name = fileName.replace('.jpg', '');
          app.loader.add(name, './resized/' + fileName);
          data[i].name = name;
          positionDict[name] = data[i];
        }

        app.loader.load((loader, resources) => {
          for(let key in resources) {
            const imageSprite = new PIXI.Sprite(resources[key].texture)
            const clusterPos = positionDict[key].cluster_pos;

            imageSprite.x = 5 * app.renderer.width * (clusterPos[0] * 2 - 1);
            imageSprite.y = 5 * app.renderer.width * (clusterPos[1] * 2 - 1);

            imageSprite.anchor.x = 0.5;
            imageSprite.anchor.y = 0.5;

            imageSprite.interactive = true;

            const name = key;

            imageSprite.on('click', () => {
              setOverlay(positionDict[name]);
            });

            viewport.addChild(imageSprite)
          }
        });
      });

  }, [])

  return (
    <div className="App">
      <canvas ref={canvas} />
      {overlay &&
        <Overlay
          details={overlay}
          setOverlay={setOverlay}
        />
      }
    </div>
  );
}

export default App;
