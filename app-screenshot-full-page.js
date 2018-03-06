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
    .screenshot('body');

  console.log(screenshot);

  await chromeless.end();
}

run().catch(console.error.bind(console));
