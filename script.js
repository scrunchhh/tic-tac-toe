const center = document.querySelector('.center');

const Turn = () => {
  let turn = 0;
  return () => {
    turn += 1;
    console.log(turn);
    return turn;
  };
};

const MarkX = (e) => {
  const markX = document.createElement('img');
  markX.setAttribute('src', 'images/x.svg');
  e.target.appendChild(markX);
};

const MarkO = (e) => {
  const markO = document.createElement('img');
  markO.setAttribute('src', 'images/circle.svg');
  e.target.appendChild(markO);
};

const turns = Turn();

const Tile = () => {
  const clickTile = (e) => {
    if (e.target.tagName === 'IMG' || e.target.firstChild) {
      console.log('Already Clicked');
    } else if (turns() % 2 !== 0) {
      MarkX(e);
    } else {
      MarkO(e);
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
