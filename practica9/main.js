document.addEventListener('DOMContentLoaded', () => {

    const boxes = document.querySelectorAll('.box');
    const playerX = document.querySelector('#player-x');
    const playerO = document.querySelector('#player-o');
    const xScore = document.querySelector('#x-score');
    const oScore = document.querySelector('#o-score');
    const tiesScore = document.querySelector('#ties-score');
    const result = document.querySelector('#result');
    const resetBtn = document.querySelector('#reset');
    const gameModeSelect = document.querySelector('#game-mode');
    const firstPlayerSelect = document.querySelector('#first-player');

    let state = {
        currentPlayer: 'X',
        gameState: Array(9).fill(""),
        gameActive: true,
        scores: { x: 0, o: 0, ties: 0 },
        vsCPU: false,
        cpuPlayer: 'O'
    };

    const WIN_CONDITIONS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const initGame = () => {
        boxes.forEach(box => {
            box.textContent = "";
            box.style.pointerEvents = "auto";
            box.classList.remove('bg-green-800');
        });
        
        state.gameState.fill("");
        state.gameActive = true;
        
        state.currentPlayer = firstPlayerSelect.value;
        state.vsCPU = gameModeSelect.value === 'cpu';
        state.cpuPlayer = firstPlayerSelect.value === 'X' ? 'O' : 'X';
        
        updatePlayerTurn();
        result.classList.add("hidden");
        resetBtn.classList.add("hidden");
        

        if (state.vsCPU && state.currentPlayer === state.cpuPlayer) {
            setTimeout(cpuMove, 800); // Pequeño delay para parecer "pensamiento"
        }
    };

    const updatePlayerTurn = () => {

        playerX.classList.remove('bg-pink-600', 'bg-cyan-400');
        playerO.classList.remove('bg-pink-600', 'bg-cyan-400');
        

        if(state.currentPlayer === 'X') {
            playerX.classList.add('bg-pink-600');
            playerO.classList.add('bg-cyan-400');
        } else {
            playerO.classList.add('bg-pink-600');
            playerX.classList.add('bg-cyan-400');
        }
    };

    const handleBoxClick = (e) => {
        if (!state.gameActive) return;
        
        const box = e.target;
        const index = +box.dataset.index;

        if (state.gameState[index] !== "") return;
        
        makeMove(index, box);
    };
    
    const makeMove = (index, box) => {
        state.gameState[index] = state.currentPlayer;
        box.textContent = state.currentPlayer;
        box.classList.add('bg-green-800');
        
        checkResult();
    };
    
    const cpuMove = () => {
        if (!state.gameActive || !state.vsCPU || state.currentPlayer !== state.cpuPlayer) return;
        
        let availableMoves = [];
        state.gameState.forEach((cell, index) => {
            if (cell === "") availableMoves.push(index);
        });
        
        if (availableMoves.length === 0) return;
        
        // Intenta ganar
        for (let condition of WIN_CONDITIONS) {
            let [a, b, c] = condition;
            if (state.gameState[a] === state.cpuPlayer && 
                state.gameState[b] === state.cpuPlayer && 
                state.gameState[c] === "") {
                return makeMove(c, boxes[c]);
            }
            if (state.gameState[a] === state.cpuPlayer && 
                state.gameState[c] === state.cpuPlayer && 
                state.gameState[b] === "") {
                return makeMove(b, boxes[b]);
            }
            if (state.gameState[b] === state.cpuPlayer && 
                state.gameState[c] === state.cpuPlayer && 
                state.gameState[a] === "") {
                return makeMove(a, boxes[a]);
            }
        }
        
        for (let condition of WIN_CONDITIONS) {
            let [a, b, c] = condition;
            if (state.gameState[a] !== state.cpuPlayer && 
                state.gameState[a] !== "" && 
                state.gameState[b] !== state.cpuPlayer && 
                state.gameState[b] !== "" && 
                state.gameState[c] === "") {
                return makeMove(c, boxes[c]);
            }
            if (state.gameState[a] !== state.cpuPlayer && 
                state.gameState[a] !== "" && 
                state.gameState[c] !== state.cpuPlayer && 
                state.gameState[c] !== "" && 
                state.gameState[b] === "") {
                return makeMove(b, boxes[b]);
            }
            if (state.gameState[b] !== state.cpuPlayer && 
                state.gameState[b] !== "" && 
                state.gameState[c] !== state.cpuPlayer && 
                state.gameState[c] !== "" && 
                state.gameState[a] === "") {
                return makeMove(a, boxes[a]);
            }
        }
        
        const randomIndex = Math.floor(Math.random() * availableMoves.length);
        makeMove(availableMoves[randomIndex], boxes[availableMoves[randomIndex]]);
    };

    const checkResult = () => {
        const isWin = WIN_CONDITIONS.some(cond =>
            cond.every(i => state.gameState[i] === state.currentPlayer)
        );  
        
        if (isWin) {
            endGame(`${state.currentPlayer} wins!`, state.currentPlayer);
            return;
        }
        if (!state.gameState.includes("")) {
            endGame('Game ended in a draw!', 'ties');
            return;
        }
        
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        updatePlayerTurn();
        
        if (state.vsCPU && state.currentPlayer === state.cpuPlayer && state.gameActive) {
            setTimeout(cpuMove, 800);
        }
    };

    const endGame = (message, winner) => {
        result.textContent = message;
        result.classList.remove("hidden");
        resetBtn.classList.remove("hidden");
        state.gameActive = false;

        boxes.forEach(box => box.style.pointerEvents = "none");

        if (winner !== "ties") {
            state.scores[winner.toLowerCase()]++;
            document.querySelector(`#${winner.toLowerCase()}-score`).textContent =
            state.scores[winner.toLowerCase()];
        } else {
            state.scores.ties++;
            tiesScore.textContent = state.scores.ties;
        }
    };

    boxes.forEach(box => box.addEventListener('click', handleBoxClick));
    resetBtn.addEventListener('click', initGame);
    gameModeSelect.addEventListener('change', initGame);
    firstPlayerSelect.addEventListener('change', initGame);

    initGame();

    
});