const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless({
    'implicitWait': true,
    'scrollBeforeClick': true,
    'viewport': {width: 2000, height: 2000, scale: 1}
  });

  // there is so much sleep so we actuall see what is hapenning
  const screenshot = await chromeless
    .goto('https://touch4it.sk')
    .wait(2000)
    .click('#navbar-toggle')
    .wait(2000)
    .click('a[data-drupal-link-system-path="culture"]')
    .wait(2000)
    .scrollTo(0, 5950)
    .wait(2000)
    .screenshot();

  console.log(screenshot);

  await chromeless.end();
}

run().catch(console.error.bind(console));
