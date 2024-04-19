import bootstrap from 'bootstrap';

export default function createPopover(element, content) {
  const popover = new bootstrap.Popover(element, {
    placement: 'top',
    content: `${content}`,
    template: '<div class="popover" role="tooltip">'
          + '<h3 class="popover-header"></h3>'
          + '<div class="popover-body"></div></div>',
  });
  return popover;
}
