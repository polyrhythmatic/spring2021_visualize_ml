const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
});

document.body.appendChild(app.view);

const viewport = new Viewport.Viewport({
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
  .decelerate();

const infoContainer = document.getElementById('image-info');
const image = document.getElementById('image');

const positionDict = {};

fetch('./images.json')
  .then((response) => {return response.json()})
  .then((data) => {
    for(const item of data) {
      const filename = item.filename.replace(/\//g, '_');
      const name = filename.replace('.jpg', '')
      app.loader.add(name, 'resized/' + filename);
      positionDict[name] = item;
    }
    app.loader.load(setup);
  });

function setup(loader, resources) {
  for(key in resources) {
    const imageSprite = new PIXI.Sprite(resources[key].texture);
    const clusterPos = positionDict[key].cluster_pos;

    imageSprite.x = 5 * app.renderer.width * (clusterPos[0] * 2 - 1);
    imageSprite.y = 5 * app.renderer.height * (clusterPos[1] * 2 - 1);

    imageSprite.anchor.x = 0.5;
    imageSprite.anchor.y = 0.5;

    imageSprite.interactive = true;

    imageSprite.on('mouseover', () => {
      const x = imageSprite.worldTransform.tx;
      const y = imageSprite.worldTransform.ty;

      image.src = `./resized/${filename}.jpg`
      image.style.position = 'absolute';
      image.style.top = y + 'px';
      image.style.left = x + 'px';

    //   imageSprite.height = imageSprite.height * 2;
    //   imageSprite.width = imageSprite.width * 2;
    });

    imageSprite.on('mouseout', () => {
      // imageSprite.height = imageSprite.height * .5;
      // imageSprite.width = imageSprite.width * .5;
    });

    const filename = key;
    imageSprite.on('click', () => {
      infoContainer.innerHTML = `
        <h1>${filename}</h1>
        <img src="./resized/${filename}.jpg" />
      `
      infoContainer.style.opacity = 1;
    });

    viewport.addChild(imageSprite);
  }
}

