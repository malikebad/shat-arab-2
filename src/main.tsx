import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Only log in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Service Worker registered successfully:', registration.scope);
        }

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, notify user
                if (confirm('New content is available. Reload to get the latest version?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((error) => {
        // Only log errors in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Service Worker registration failed:', error);
        }
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
