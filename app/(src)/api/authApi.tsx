'use client';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authUserState } from '../state/atoms';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';

const baseUrl = 'https://eduapi.liara.run/api/auth';

// axios.defaults.baseURL = baseUrl;

const SetUserAtom = (data: any) => {
  const [authUserdata, setAuthUser] = useRecoilState(authUserState);

  setAuthUser(data);
};

export const registerUser = async (formData: any) => {
  try {
    const data = await axios.post('https://eduapi.liara.run/api/auth/register', formData);
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
    const data = await axios.post('/login', formData);
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
