import { defineConfig } from '@umijs/max';

export default defineConfig({
  helmet: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: 'data', // Configure dataField for useRequest to directly consume response.data
  },
  title: 'USAD by Pathenom',
  favicons: ['/favicon.png'],
  // Define environment variables that should be available in the browser
  define: {
    'process.env.UMI_APP_API_BASE_URL': process.env.UMI_APP_API_BASE_URL || '',
    'process.env.UMI_APP_API_TIMEOUT':
      process.env.UMI_APP_API_TIMEOUT || '10000',
    'process.env.UMI_APP_APP_ENV': process.env.UMI_APP_APP_ENV || 'development',
    'process.env.UMI_APP_DEBUG_MODE': process.env.UMI_APP_DEBUG_MODE || 'true',
  },
  // 添加 Google Analytics 脚本
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-W7429VYYMS',
      async: true,
    },
    {
      content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-W7429VYYMS');
      `,
    },
  ],
  metas: [
    {
      name: 'description',
      content:
        'Pathenom is the home of USAD. Learn how to mint USAD, redeem GBPC, and view verified history. Start fast with clear steps, fees, and safety notes for new users',
    },
    {
      name: 'google-site-verification',
      content: 'w4G4ZzQaX5I0UnWTFgi12qq5X2yjBvllf0jlShLfKwY',
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    },
  ],

  routes: [
    {
      path: '/',
      component: './home',
    },
    {
      path: '/history',
      component: './history',
    },
    {
      path: '/mint',
      component: './mint',
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
