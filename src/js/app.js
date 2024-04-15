import createPopover from './form.js';

const button = document.querySelector('.btn');
const content = button.dataset.content;
createPopover(button.dataset.content);


