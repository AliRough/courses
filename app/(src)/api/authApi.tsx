'use client';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authUserState } from '../state/atoms';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';

const baseUrl = 'https://eduapi.liara.run/api/auth';

// axios.defaults.baseURL = baseUrl;

export const registerUser = async (formData: any) => {
  try {
    const data = await axios.post(
      'https://eduapi.liara.run/api/auth/register',
      formData,
    );
    console.log(data);
    if (data.status === 201) {
      console.log(formData);

      // SetUserAtom(formData);
    }

    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const logInUser = async (formData: any) => {
  try {
    const data = await axios.post(
      'https://eduapi.liara.run/api/auth/login',
      formData,
    );
    console.log(data);
    if (data.status === 201) {
      console.log(formData);

      // SetUserAtom(formData);
    }

    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};
export const getUserByToken = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const data = await axios.get('https://eduapi.liara.run/api/user', config);
    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const logOutUser = async (token: string) => {
  const config = {
    headers: { Authorization: `bearer ${token}`, Accept: 'application/json' },
  };
  console.log(config);

  try {
    const data = await axios.post(
      'https://eduapi.liara.run/api/auth/logout',
      config,
    );
    console.log(data);

    // return;
  } catch (error: any) {
    console.log(error);

    // throw error.response.data;
  }
};
