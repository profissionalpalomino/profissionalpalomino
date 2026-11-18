import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Service Worker para PWA instalável no Android / Chrome / iOS
if ("serviceWorker" in navigator) {
  const registerSw = () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  };
  if (document.readyState === "complete") {
    registerSw();
  } else {
    window.addEventListener("load", registerSw);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
