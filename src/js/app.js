import createPopover from './form';

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');

    // Инициализация всплывающей подсказки с помощью createPopover
    const popover = createPopover(button, button.dataset.content);

    // Инициализация всплывающей подсказки по клику на кнопку
    button.addEventListener('click', function() {
        if (popover._activeTrigger.click) { // Проверка, активен ли триггер клика
            popover.hide(); // Скрыть, если отображен
        } else {
            popover.show(); // Показать, если скрыт
        }
    });
});


