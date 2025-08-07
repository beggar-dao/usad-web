import { request } from '@umijs/max';

export const get2fa = async () => {
  return request('/user/auth/2fa', {
    method: 'post',
  });
};

export const getSelf = async () => {
  return request('/user/self', {
    method: 'get',
  });
};

export const secondaryLogin = async (data: any) => {
  return request('/user/auth/secondary-login', {
    method: 'post',
    data,
  });
};

export const bind2fa = async (data: any) => {
  return request('/user/auth/2fa/enable', {
    method: 'put',
    data,
  });
};

export const updatePassword = async (data: any) => {
  return request('/user/password', {
    method: 'put',
    data,
  });
};

export const disable2faAxios = async (data: any) => {
  return request('/user/auth/2fa/disable', {
    method: 'put',
    data,
  });
};

export const sendCaptcha = async (data: any) => {
  return request('/user/auth/captcha', {
    method: 'post',
    data,
  });
};

export const updateEmail = async (data: any) => {
  return request('/user/email', {
    method: 'put',
    data,
  });
};
