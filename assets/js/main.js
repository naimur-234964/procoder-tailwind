const mode = document.getElementById('button');
const main = document.getElementById('main');

mode.addEventListener("click", () => {
    main.classList.toggle("dark");
});