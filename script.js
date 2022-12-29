const center = document.querySelector('.center');

const Turn = () => {
  let turn = 0;
  return () => {
    turn += 1;
    return turn;
  };
};

const turns = Turn();

const Tile = () => {
  const clickTile = (e) => {
    const markX = document.createElement('img');
    markX.setAttribute('src', 'images/x.svg');
    const markO = document.createElement('img');
    markO.setAttribute('src', 'images/circle.svg');
    if (turns() % 2 !== 0) {
      e.target.appendChild(markX);
    } else {
      e.target.appendChild(markO);
    }
  };
  return { clickTile };
};

for (let i = 1; i <= 9; i += 1) {
  const tile = document.createElement('div');
  const tileID = Tile();
  tile.addEventListener('click', tileID.clickTile);
  center.appendChild(tile);
}
