'use client';

import * as api from '@/app/(src)/api/authApi';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

export const useChangeAvatar = () => {
  const queryClient = useQueryClient();
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);

  return useMutation({
    mutationFn: (formData: any) =>
      api.changeUserAvatar(formData, cookies.Authorization),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });

      toast.success('عکس شما با موفقیت تغییر کرد');
      console.log('sucses');

      // toast.success(result);
    },
    onError: () => {
      console.log('erroe');
    },
  });
};

export const useDeleteAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (token) => api.deleteUserAvatar(token),
    onSuccess: () => {
      console.log('rrrrrrrrrrrrrrrresulrt', queryClient);
      queryClient.invalidateQueries({ queryKey: ['userData'] });

      toast.success('عکس شما با موفقیت  پاک شد');
      // toast.success(result);
    },
  });
};

export const useEditUserData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ formData, token }: any) => api.editUserData(formData, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });

      toast.success('اطلاعات شما با موفقیت تغییر کرد');
      // toast.success(result);
    },
  });
};

export const useChangeUserPass = () => {
  return useMutation({
    mutationFn: ({ formData, token }: any) =>
      api.changeUserPass(formData, token),
    onSuccess: () => {
      toast.success('رمز شما با موفقیت تغییر کرد');
    },
  });
};

export const useLogInUser = () => {
  const queryClient = useQueryClient();
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
  const router = useRouter();

  return useMutation({
    mutationFn: (formData: any) => api.logInUser(formData),
    onSuccess: (data) => {
      console.log('hoookdataaaaaa is', data);

      queryClient.invalidateQueries({ queryKey: ['userData'] });

      setCookie('Authorization', data.data.accessToken, { path: '/' });

      toast.success(' شما با موفقیت وارد شدید');
      router.push('/profile/s/edit-profile');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
};

export const useLogOutUser = () => {
  const queryClient = useQueryClient();
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
  const router = useRouter();

  return useMutation({
    mutationFn: () => api.logOutUser(cookies.Authorization),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['userData'] });

      removeCookie('Authorization', { path: '/' });

      toast.success('شما از پنل خود خارج شدید');
      router.push('/');
    },
  });
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
  const router = useRouter();

  return useMutation({
    mutationFn: (formData: any) => api.registerUser(formData),
    onSuccess: (data) => {
      console.log('hoookdataaaaaa is', data);

      queryClient.invalidateQueries({ queryKey: ['userData'] });

      setCookie('Authorization', data.data.accessToken, { path: '/' });

      toast.success(' شما با موفقیت وارد شدید');
      toast.warning(' ایمیل ارسال شد ,ایمیل خود را تایید کنید');
      router.push('/profile/s/edit-profile');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetUser = (): any => {
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);

  return useQuery({
    queryKey: ['userData'],
    queryFn: () => api.getUserByToken(cookies.Authorization),
  });
};
