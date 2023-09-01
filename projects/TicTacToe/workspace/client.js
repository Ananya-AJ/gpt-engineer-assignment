const socket = io();
const board = document.getElementById('board');
let player = 'X';

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = player;
            socket.emit('move', {index: i, player: player});
            player = player === 'X' ? 'O' : 'X';
        }
    });
    board.appendChild(cell);
}

socket.on('move', (data) => {
    board.children[data.index].textContent = data.player;
});
