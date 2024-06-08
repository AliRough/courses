'use client';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authUserState } from '../state/atoms';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const baseUrl = 'https://eduapi.liara.run';

// axios.defaults.baseURL = baseUrl;

export const registerUser = async (formData: any) => {
  try {
    const data = await axios.post(`${baseUrl}/api/auth/register`, formData);
    console.log(data);
    if (data.status === 201) {
      console.log(formData);
    }

    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const logInUser = async (formData: any) => {
  try {
    const data = await axios.post(`${baseUrl}/api/auth/login`, formData);
    console.log(data);
    if (data.status === 201) {
      console.log(formData);
    }

    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const changeUserPass = async (formData: any, token: any) => {
  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `${baseUrl}/api/user/password`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: formData,
  };
  const data: any = await axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
      throw new Error(error.message);
    });
};

export const editUserData = async (formData: any, token: any) => {
  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `${baseUrl}/api/user`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: formData,
  };
  const data: any = await axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
      throw new Error(error.message);
    });
};

export const deleteUserAvatar = async (token: any) => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseUrl}/api/user/delete-avatar`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };
  const data: any = await axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data.message);
      throw new Error(error.response.data.message);
    });
  console.log(data);

  if (data.status === 200) {
    toast.success('عکس شما با موفقیت تغییر کرد');
  }
};

export const changeUserAvatar = async (formData: any, token: any) => {
  console.log(formData);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseUrl}/api/user/change-avatar`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',

      Authorization: `Bearer ${token}`,
    },
    data: formData,
  };
  const data: any = await axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data.message);
      throw new Error(error.response.data.message);
    });
  console.log(data);
};

export const getUserByToken = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const data = await axios.get(`${baseUrl}/api/user`, config);
    return data.data?.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const logOutUser = async (token: string) => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseUrl}/api/auth/logout`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.message);
    });
};

export const verifyEmail = async (id: any, hash: any) => {
  try {
    const data = await axios.post(
      `${baseUrl}/api/auth/email/verify?id=${id}&hash=${hash}`,
    );
    toast.success('ایمیل شما با موفقیت تایید شد');
    return data;
  } catch (error: any) {
    console.log(error);
    toast.error(error.response.data.message);
    throw error.response;
  }
};

export const sendVerificationEmail = async (token: string) => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseUrl}/api/auth/email/send-verify`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const data = axios
    .request(config)
    .then((response: any) => {
      console.log(JSON.stringify(response.data));
      toast.success(response.data.message);
    })
    .catch((error: any) => {
      console.log(error);
      toast.error(error.message);
      throw new Error(error.message);
    });
};
