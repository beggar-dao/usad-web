import { history, type RequestConfig } from '@umijs/max';
import 'animate.css';
import { message } from 'antd';
import React from 'react';
import { envConfig } from './config/env';
// Initialize token manager

// Error handling scheme: Error types
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}

// Response data structure agreed with the backend
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
  message?: string;
}

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
    // errorThrower: (res: ResponseStructure) => {
    //   const {
    //     success,
    //     data,
    //     errorCode,
    //     errorMessage,
    //     showType,
    //     message: responseMessage,
    //   } = res;
    //   if (!success) {
    //     const error: any = new Error(
    //       errorMessage || responseMessage || 'Request failed',
    //     );
    //     error.name = 'BizError';
    //     error.info = {
    //       errorCode,
    //       errorMessage: errorMessage || responseMessage,
    //       showType,
    //       data,
    //     };
    //     throw error;
    //   }
    // },
    // Error catching and handling
    // errorHandler: (error: any, opts: any) => {
    //   if (opts?.skipErrorHandler) throw error;
    //   // Check if we're on login/register pages to avoid duplicate error messages
    //   const isOnAuthPage =
    //     typeof window !== 'undefined' &&
    //     (window.location.pathname.includes('/Auth/Login') ||
    //       window.location.pathname.includes('/Auth/CreateAccount'));
    //   // Handle custom business errors
    //   if (error.name === 'BizError') {
    //     const errorInfo: ResponseStructure | undefined = error.info;
    //     if (errorInfo) {
    //       const { errorMessage, errorCode } = errorInfo;
    //       // Translate error message to English
    //       const translatedMessage = translateErrorMessage(
    //         errorMessage || 'An error occurred',
    //       );
    //       switch (errorInfo.showType) {
    //         case ErrorShowType.SILENT:
    //           // do nothing
    //           break;
    //         case ErrorShowType.WARN_MESSAGE:
    //           if (!isOnAuthPage) message.warning(translatedMessage);
    //           break;
    //         case ErrorShowType.ERROR_MESSAGE:
    //           if (!isOnAuthPage) message.error(translatedMessage);
    //           break;
    //         case ErrorShowType.NOTIFICATION:
    //           if (!isOnAuthPage)
    //             message.error(`${errorCode}: ${translatedMessage}`);
    //           break;
    //         case ErrorShowType.REDIRECT:
    //           // Handle redirect if needed
    //           break;
    //         default:
    //           if (!isOnAuthPage) message.error(translatedMessage);
    //       }
    //     }
    //   } else if (error.response) {
    //     // Axios error - server responded with error status
    //     const status = error.response.status;
    //     const errorMessage =
    //       error.response.data?.message || error.response.data?.errorMessage;
    //     if (status === 401) {
    //       // Handle authentication errors
    //       tokenManager.clearTokens();
    //       // Don't show error message if user is already on login page
    //       const isOnLoginPage =
    //         typeof window !== 'undefined' &&
    //         window.location.pathname.includes('/Auth/Login');
    //       if (!isOnLoginPage) {
    //         message.error('Authentication expired. Please login again.');
    //       }
    //       if (
    //         typeof window !== 'undefined' &&
    //         !window.location.pathname.includes('/Auth/Login')
    //       ) {
    //         window.location.href = '/Auth/Login';
    //       }
    //     } else if (status === 403) {
    //       message.error(
    //         'Access denied. You do not have permission to perform this action.',
    //       );
    //     } else if (status === 404) {
    //       message.error('Resource not found.');
    //     } else if (status >= 500) {
    //       message.error('Server error. Please try again later.');
    //     } else {
    //       message.error(
    //         translateErrorMessage(errorMessage) ||
    //           `Request failed with status: ${status}`,
    //       );
    //     }
    //   } else if (error.request) {
    //     // Network error - no response received
    //     message.error(
    //       'Network error. Please check your connection and try again.',
    //     );
    //   } else {
    //     // Other errors
    //     message.error(error.message || 'An unexpected error occurred.');
    //   }
    // },
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
      if (data.code === 'A10005') {
        history.push('/Auth/Login');
      }
      if (data.code !== '00000') {
        message.error(data.message || 'An unexpected error occurred.');
        return Promise.reject(response);
      }

      return response;
    },
  ],
};

export function rootContainer(container: React.ReactNode) {
  return container;
}
