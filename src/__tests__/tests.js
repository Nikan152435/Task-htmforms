import puppeteer from "puppeteer";
import createPopover from "./js/form";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(`
    <html>
    <head>
      <style>
        .popover-container { display: none; }
      </style>
    </head>
    <body>
      <button class="btn" type="button" data-bs-toggle="popover" data-bs-placement="top" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
    </body>
    </html>
  `);

  // Проверка появления popover при клике на кнопку
  await page.click('.btn');
  const popover = await page.$('.popover');
  if (!popover) {
    throw new Error('Popover did not appear');
  }

  // Проверка скрытия popover при клике вне него
  await page.click('body');
  const hiddenPopover = await page.$('.popover');
  if (hiddenPopover) {
    throw new Error('Popover did not hide');
  }

  await browser.close();
  // Jest тесты
  describe('createPopover', () => {
    it('should return a popover instance', () => {
      const element = document.createElement('button');
      element.dataset.content = 'Test Content';

      const popover = createPopover(element, element.dataset.content);

      expect(popover).toBeDefined();
      expect(popover.constructor.name).toBe('Popover');
      expect(popover._config.content).toBe('Test Content');
    });
  });
})();
