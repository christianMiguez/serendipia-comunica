'use client'

import Script from 'next/script'

export function FooterScripts() {
  return (
    <>
      <Script
        src={'/assets/js/plugins.js'}
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      />
      <Script
        src={'/assets/js/theme.js'}
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      />
    </>
  )
}
