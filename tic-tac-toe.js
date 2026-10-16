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

        // mouse hovering over square
        item.addEventListener("mouseover", () => {
            item.classList.add("hover");
        });

        //mouse not hovering over square
        item.addEventListener("mouseout", () => {
            item.classList.remove("hover");
        });
    }
});