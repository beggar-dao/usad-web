import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: 'data', // Configure dataField for useRequest to directly consume response.data
  },

  // Define environment variables that should be available in the browser
  define: {
    'process.env.UMI_APP_API_BASE_URL': process.env.UMI_APP_API_BASE_URL || '',
    'process.env.UMI_APP_API_TIMEOUT':
      process.env.UMI_APP_API_TIMEOUT || '10000',
    'process.env.UMI_APP_APP_ENV': process.env.UMI_APP_APP_ENV || 'development',
    'process.env.UMI_APP_DEBUG_MODE': process.env.UMI_APP_DEBUG_MODE || 'true',
  },
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
