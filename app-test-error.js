const { Chromeless } = require('chromeless')
const { expect } = require('chai')

async function run() {
  const chromeless = new Chromeless({
    'implicitWait': true,
    'scrollBeforeClick': true,
    'viewport': {width: 2000, height: 2000, scale: 1}
  });

  // there is so much sleep so we actuall see what is hapenning
  const result = await chromeless
    .goto('https://touch4it.sk')
    .wait(1000)
    .click('#navbar-toggle')
    .wait(1000)
    .click('a[data-drupal-link-system-path="culture"]')
    .wait(1000)
    .exists('img[alt="Tomas"]');

  expect(result).to.be.true
  await chromeless.end()
}

run().catch(console.error.bind(console));
