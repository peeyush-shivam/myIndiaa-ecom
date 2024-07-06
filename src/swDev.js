const swDev = () => {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swURL)
        .then((reg) => console.log("Service worker registered"))
        .catch((err) => console.error(`Service Worker Error: ${err}`));
    });
  } else {
    console.log("Service Worker is not supported by browser.");
  }
};

export default swDev;
