self.addEventListener("install", (event) => {
  console.log("Service worker installig...", event);
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...", event);
});
