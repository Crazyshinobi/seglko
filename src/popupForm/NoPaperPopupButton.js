'use client';

import { useEffect } from 'react';

export default function NoPaperPopupButton() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://in8cdn.npfs.co/js/widget/npfwpopup.js"]'
    );

    function initWidget() {
      if (typeof window.NpfWidgetsInit === 'function') {
        window.NpfWidgetsInit({
          widgetId: 'c4686ca3db50effadb9f24fc7ca22401',
          baseurl: 'widgets.in8.nopaperforms.com',
          formTitle: 'Enquiry Form',
          titleColor: '#FF0033',
          backgroundColor: '#ddd',
          iframeHeight: '500px',
          buttonbgColor: '#4c79dc',
          buttonTextColor: '#FFF',
        });
        return true;
      }
      return false;
    }

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://in8cdn.npfs.co/js/widget/npfwpopup.js';
      script.async = true;

      script.onload = () => {
        // Try immediately
        if (!initWidget()) {
          // Retry every 100ms until available (timeout after ~5s)
          let attempts = 0;
          const maxAttempts = 50; 
          const interval = setInterval(() => {
            attempts++;
            if (initWidget() || attempts >= maxAttempts) {
              clearInterval(interval);
              if (attempts >= maxAttempts) {
                console.error('NpfWidgetsInit not available after timeout');
              }
            }
          }, 100);
        }
      };

      document.body.appendChild(script);
    } else {
      // Script already loaded — try to init immediately, with same retry logic
      if (!initWidget()) {
        let attempts = 0;
        const maxAttempts = 50; 
        const interval = setInterval(() => {
          attempts++;
          if (initWidget() || attempts >= maxAttempts) {
            clearInterval(interval);
            if (attempts >= maxAttempts) {
              console.error('NpfWidgetsInit not available after timeout');
            }
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <button
        type="button"
        className="npfWidgetButton npfWidget-c4686ca3db50effadb9f24fc7ca22401 bg-blue-6 00text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        Enquire Now!
      </button>
    </div>
  );
}
