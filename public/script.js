/* eslint-disable no-console */
// if ("serviceWorker" in navigator) {
//     if (navigator.serviceWorker.controller) {
//       console.log("active service worker found, no need to register");
//     } else {
//       // Register the service worker
//       navigator.serviceWorker
//         .register("service-worker.js", {
//           scope: "./"
//         })
//         .then(function (reg) {
//           console.log(" Service worker has been registered for scope: " + reg.scope);
//         });
//     }
//   }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  