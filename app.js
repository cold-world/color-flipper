const btn = document.querySelector('.btn');
const colorName = document.querySelector('.color_name');
const randomRbg = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

btn.addEventListener('click', () => {
    document.body.style.background = `rgb(${randomRbg(255, 0)},${randomRbg(255, 0)},${randomRbg(255, 0)})`;
    colorName.textContent = `rgb(${randomRbg(255, 0)},${randomRbg(255, 0)},${randomRbg(255, 0)})`;
});