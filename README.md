# Example chromeless node.js app

An example implementation of https://github.com/graphcool/chromeless

```bash
docker build . -t ttibensky/example-chromeless
docker run -it --user root ttibensky/example-chromeless /usr/bin/chromium-browser --headless --no-sandbox --remote-debugging-port=9222 --disable-gpu & npm install && node app-screenshot.js
docker run -it --user root ttibensky/example-chromeless /usr/bin/chromium-browser --headless --no-sandbox --remote-debugging-port=9222 --disable-gpu & npm install && node app-screenshot-full-page.js
docker run -it --user root ttibensky/example-chromeless /usr/bin/chromium-browser --headless --no-sandbox --remote-debugging-port=9222 --disable-gpu & npm install && node app-test-error.js
docker run -it --user root ttibensky/example-chromeless /usr/bin/chromium-browser --headless --no-sandbox --remote-debugging-port=9222 --disable-gpu & npm install && node app-test-success.js
```

