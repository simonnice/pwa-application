// Install service worker
self.addEventListener("install", evt => {
  console.log("Service Worker has been installed!");
});

// Activate event
self.addEventListener("activate", evt => {
  console.log("Service worker has been activated");
});

// Fetch event
self.addEventListener("fetch", evt => {
  console.log("fetch event", evt);
});
