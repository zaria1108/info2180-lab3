document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    let currentPlayer = "X";
    let gameOver = false;

    //ways to win
    const winningLines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
        [0, 4, 8], [2, 4, 6] //diagonals
    ];

    //check winner
    function checkWinner() {
        for (const [a, b, c] of winningLines) {
            const first = squares[a].textContent;
            if (first !== "" && first === squares[b].textContent && first === squares[c].textContent) {
                return first;
            }
        }
        return null;
    }

    for (const item of squares) {
        item.classList.add("square");

        item.addEventListener("click", () => {
            if (gameOver) return;

            if (item.textContent === "") {
                item.textContent = currentPlayer;
                item.classList.add(currentPlayer);

                const winner = checkWinner();
                if (winner) {
                    status.textContent = "Congratulations! " + winner + " is the Winner!";
                    status.classList.add("you-won");
                    gameOver = true;
                }
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });

        // mouse hovering over square
        item.addEventListener("mouseover", () => {
            item.classList.add("hover");
        });

        //mouse not hovering over square
        item.addEventListener("mouseout", () => {
            item.classList.remove("hover");
        });
    }

    //new Game button 
    const newGameBtn = document.querySelector(".btn");

    newGameBtn.addEventListener("click", () => {
        for (const item of squares) {
            item.textContent = "";
            item.classList.remove("X", "O");
        }
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");

        currentPlayer = "X";
        gameOver = false;
    });
});