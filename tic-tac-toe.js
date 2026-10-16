document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll("#board div");
    for (const item of squares) {
        item.classList.add("square");
    }
});
