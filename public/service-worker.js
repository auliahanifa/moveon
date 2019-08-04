/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
// self.addEventListener('install',(registered)=> {
//     console.log('service worker installed', registered);

// });
// self.addEventListener('install',(cached)=> {
//     console.log('service worker activated', cached);
// });

// This is an event that can be fired from your page to tell the SW to update the offline page

self.addEventListener("install", register => {
  console.log("service worker installed", registered);
});

self.addEventListener("install", cache => {
  console.log("service worker activated", cached);
});

self.addEventListener('activate', async () => {
  // This will be called only once when the service worker is activated.
  try {
    const options = {}
    const subscription = await self.registration.pushManager.subscribe(options)
    console.log(JSON.stringify(subscription))
  } catch (err) {
    console.log('Error', err)
  }
})

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker.register("/service-worker.js");
//   });
// }
