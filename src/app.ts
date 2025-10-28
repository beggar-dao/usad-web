import { type RequestConfig } from '@umijs/max';
import 'animate.css';
import { message } from 'antd';
import { envConfig } from './config/env';
import React from 'react';

/**
 * Request configuration for UmiJS following best practices
 */
export const request: RequestConfig = {
  // Base configuration
  baseURL: envConfig.apiBaseUrl,
  timeout: envConfig.apiTimeout,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },

  // Error handling configuration
  errorConfig: {
    // Error throwing - processes backend response and throws custom errors
  },

  // Request interceptors
  requestInterceptors: [
    (config: any) => {
      // Add authentication token
      const token = localStorage.getItem('token');
      config.headers = {
        'Content-Type': 'application/json',
        ...config.headers,
        satoken: `${token}`,
      };
      return config;
    },
  ],

  // Response interceptors
  responseInterceptors: [
    (response: any) => {
      let data = response.data;
      message.destroy();
      // if (data.code === 'A10005') {
      //   history.push('/Auth/Login');
      // }
      // if (data.code !== '00000') {
      //   message.error(data.message || 'An unexpected error occurred.');
      //   return Promise.reject(response);
      // }

      return data;
    },
  ],
};

export function rootContainer(container: React.ReactNode) {
  return container;
}
