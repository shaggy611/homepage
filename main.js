
const div = document.getElementById('resume');

document.addEventListener('mousemove', function (e) {
    // Отримуємо поточні координати курсора
    let mouseX = e.pageX;
    let mouseY = e.pageY;

    // Отримуємо координати центра div
    let divX = div.offsetLeft + div.offsetWidth / 2;
    let divY = div.offsetTop + div.offsetHeight / 2;

    // Розраховуємо відстань між курсором і центром div
    let diffX = mouseX - divX;
    let diffY = mouseY - divY;

    // Повертаємо div в напрямку курсора з невеликою затримкою
    div.style.transform = 'translate(' + diffX / 20 + 'px, ' + diffY / 20 + 'px)';
});

// Повертаємо div у початкове положення після того, як миша залишить його
div.addEventListener('mouseleave', function () {
    div.style.transform = 'translate(0, 0)';
});
