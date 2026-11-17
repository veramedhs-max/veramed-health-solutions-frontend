import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { HelmetProvider } from "react-helmet-async";

if ("serviceWorker" in navigator && import.meta.env.PROD) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => { });
    });
}

createRoot(document.getElementById("root")!).render(
    <>
        <HelmetProvider>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 5000,
                    style: {
                        background: '#ffffff',
                        color: '#141414',
                    },
                }}
            />
            <App />
        </HelmetProvider>
    </>
);
