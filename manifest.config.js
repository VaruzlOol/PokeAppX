import manifest from "./manifest.webmanifest.json";

export const vitePWAOptions = {
  registerType: 'autoUpdate',
    injectRegister: 'auto',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return "https://ballapi.co/api/v2/region";
          },
          handler: "CacheFirst",
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ]
    },
    devOptions: {
      enabled: true
    },
    includeAssets: [
      'ball-16x16.ico',
      'ball-128x128.ico',
      'ball-192x192.png',
      'ball-256x256.png',
      'ball-384x384.png',
      'ball-512x512.png',
      'ball-512x512.svg'
    ],
    manifest: {
      //manifest
      /**/
      name: 'Pokemon App X',
      short_name: 'PokeAppX',
      start_url: "/",
      scope: "/",
      display: "fullscreen",
      description: 'Pokemon App X made with love.',
      theme_color: '#1f2e51',
      background_color: "#cb56cc",
      icons: [
        {
          src: "./public/icons/ball-144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "./public/icons/ball-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./public/icons/ball-256x256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "./public/icons/ball-384x384.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: "./public/icons/ball-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "./public/icons/ball-512x512.svg",
          sizes: "512x512",
          type: "image/svg+xml"
        }
      ]
      /**/
    }
}

export default vitePWAOptions;