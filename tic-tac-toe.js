document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    for (const item of squares) {
        item.classList.add("square");
        item.addEventListener("click", () => {
            if (item.textContent === "") {
                item.textContent = currentPlayer;
                item.classList.add(currentPlayer);
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    }
});


