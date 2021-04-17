const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0xffffff,
});
document.body.appendChild(app.view);

const infoContainer = document.getElementById('text-info');

const viewport = new Viewport.Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,

    interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
});

app.stage.addChild(viewport)

// activate plugins
viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate()

const colors = [];
for(let i = 0; i < 10; i ++) {
  //this function makes a random hex code color
  colors.push(Math.floor(Math.random()*16777215))
}


fetch('./lookup.json')
  .then((response) => {return response.json()})
  .then((data) => {

    for (let index in data) {
      const circle = new PIXI.Graphics();
      const umapPos = data[index].umap_pos;

      const xPos = 5 * app.renderer.width * (umapPos[0] * 2 - 1);
      const yPos = 5 * app.renderer.width * (umapPos[1] * 2 - 1);

      const radius = 10;
      circle.hitArea = new PIXI.Circle(xPos, yPos, radius);
      circle.interactive = true;
      // circle.lineStyle (1, 0x000000, 1);

      // get a random color by our k-means cluster number
      const color = colors[data[index].cluster_num];
      circle.beginFill(color, 1);
      circle.drawCircle(xPos, yPos, radius);
      circle.endFill();

      circle.interactive = true;

      circle.on('click', () => {
        infoContainer.innerHTML = `<h1>${data[index].filename}</h1><p>${data[index].content}</p>`;
        infoContainer.style.opacity = "1";
      });

      viewport.addChild(circle);
    }
  });