import createPopover from './form';

const button = document.querySelector('.btn');

createPopover(button.dataset.content);
