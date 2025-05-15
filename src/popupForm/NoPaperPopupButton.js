"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export default function PopupForm() {
  useEffect(() => {
    const showPopup = () => {
      if (window.NpfWidgetsInit) {
        const widget = new window.NpfWidgetsInit({
          // your config here
        });
        // Trigger the popup
        document.querySelector('.npfWidget-c4686ca3db50effadb9f24fc7ca22401')?.click();
      }
    };

    // Check if script is already loaded
    if (window.NpfWidgetsInit) {
      showPopup();
    } else {
      // If not, wait for it to load
      window.addEventListener('npfWidgetLoaded', showPopup);
    }

    return () => {
      window.removeEventListener('npfWidgetLoaded', showPopup);
    };
  }, []);

  return (
    <>
      <Script 
        src="https://in8cdn.npfs.co/js/widget/npfwpopup.js" 
        strategy="afterInteractive"
        onLoad={() => {
          window.dispatchEvent(new Event('npfWidgetLoaded'));
        }}
      />
      
      <button 
        type="button" 
        className="npfWidgetButton npfWidget-c4686ca3db50effadb9f24fc7ca22401"
        style={{ display: 'none' }} // Hide the button if you want auto-popup
      >
        Enquire Now!
      </button>
    </>
  );
}