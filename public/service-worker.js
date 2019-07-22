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


self.addEventListener('install',(register)=> {
    console.log('service worker installed', registered);    
});

self.addEventListener('install',(cache)=> {
    console.log('service worker activated', cached);    
});