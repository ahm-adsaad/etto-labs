import localFont from "next/font/local"

/** Preloaded — hero H1 uses Archivo 600. */
export const archivo = localFont({
  src: "../fonts/archivo-600.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-archivo",
  // optional on the hero face avoids late LCP under mobile throttle while still
  // applying Archivo when the preloaded file wins the short block window.
  display: "optional",
  preload: true,
  adjustFontFallback: "Arial",
})

/** Not preloaded — secondary display weights. */
export const archivoSecondary = localFont({
  src: [
    { path: "../fonts/archivo-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/archivo-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-archivo-secondary",
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
})

export const ibmPlexSans = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
})

export const ibmPlexMono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
})

export const ibmPlexSansArabic = localFont({
  src: [
    {
      path: "../fonts/ibm-plex-sans-arabic-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ibm-plex-sans-arabic-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
})
