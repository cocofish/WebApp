/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "Map.20a20746.js",
    "revision": "f1c2e8a08969315747b93ce4d04c8135"
  },
  {
    "url": "Map.504c403d.css",
    "revision": "87bda9a46299cce8d5fabf5c2d4fe6b5"
  },
  {
    "url": "source.0d728ccc.css",
    "revision": "a98688eb32ad38c3a454c6c9f46ab5ea"
  },
  {
    "url": "source.9f034a77.js",
    "revision": "4fcc4576769944eb5f5bff48b21b0382"
  },
  {
    "url": "wuhan2020-mini.07462d26.png",
    "revision": "9e1505ea6096e6c6bed0324416251411"
  },
  {
    "url": "wuhan2020.efe2a585.png",
    "revision": "f677659faaedfae95aa12551398a6d0c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
