const center = document.querySelector('.center');

const Turn = () => {
  let turn = 0;
  return () => {
    turn += 1;
    return turn;
  };
};

const MarkX = (e) => {
  const markX = document.createElement('img');
  markX.setAttribute('src', 'images/x.svg');
  e.target.classList.add('X');
  e.target.appendChild(markX);
};

const MarkO = (e) => {
  const markO = document.createElement('img');
  markO.setAttribute('src', 'images/o.svg');
  e.target.classList.add('O');
  e.target.appendChild(markO);
};

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const winX = ['X', 'X', 'X'];
const winO = ['O', 'O', 'O'];

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

const CheckWin = () => {
  const win = () => {
    const children = Array.from(center.childNodes);
    let status = false;
    for (let i = 0; i <= wins.length - 1; i += 1) {
      const condition = wins[i];
      const board = [];
      for (let item = 0; item <= 2; item += 1) {
        const num = children[condition[item]];
        if (num.classList.contains('X')) {
          board.push('X');
        } else if (num.classList.contains('O')) {
          board.push('O');
        } else {
          board.push('B');
        }
      }
      if (arrayEquals(board, winX)) {
        console.log('X wins!');
        status = true;
      } else if (arrayEquals(board, winO)) {
        console.log('O wins!');
        status = true;
      }
    }
    return status;
  };
  return { win };
};

const turns = Turn();

const Tile = () => {
  const clickTile = (e) => {
    if (e.target.tagName === 'IMG' || e.target.firstChild) {
      console.log('Already Clicked');
    } else if (turns() % 2 !== 0) {
      MarkX(e);
      console.log(CheckWin().win());
    } else {
      MarkO(e);
      console.log(CheckWin().win());
    }
  };
  return { clickTile };
};

for (let i = 1; i <= 9; i += 1) {
  const tile = document.createElement('div');
  const tileID = Tile();
  tile.addEventListener('click', tileID.clickTile);
  tile.setAttribute('id', `${i}`);
  center.appendChild(tile);
}
