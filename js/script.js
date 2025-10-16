function menuAction() {
    const menu = document.getElementById('main_menu');
    const isHidden = window.getComputedStyle(menu).display == 'none';

    if (isHidden) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}