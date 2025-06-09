'use client';

import { useEffect } from 'react';

export default function GoogleAdsScript() {
  useEffect(() => {
    // Load the gtag.js script
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11479782832';
    script1.async = true;
    document.head.appendChild(script1);

    // Add the gtag config script
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11479782832');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}
