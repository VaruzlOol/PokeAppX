export const vitePWAOptions = {
  registerType: 'autoUpdate',
    injectRegister: 'auto',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return "https://pokeapi.co/api/v2/region";
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
    includeAssets: ['poke_x_128x128.ico', 'poke_x_500x500.png', 'poke_x.svg'],
    manifest: {
      name: 'Pokemon App X',
      short_name: 'PokeAppX',
      description: 'Pokemon App X made with love.',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/src/assets/poke_x.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
        },
        {
          src: '/src/assets/poke_x.svg',
          sizes: '512x512',
          type: 'image/svg+xml'
        },
        {
          src: '/src/assets/poke_x_500x500.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/src/assets/poke_x_500x500.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
}

export default vitePWAOptions;