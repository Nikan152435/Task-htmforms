const puppeteer = require('puppeteer');

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
})();