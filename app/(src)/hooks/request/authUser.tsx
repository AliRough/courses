'use client';

import * as api from '@/app/(src)/api/authApi';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

export const useChangeAvatar = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(['Authorization']);

  return useMutation({
    mutationFn: (formData: any) =>
      api.changeUserAvatar(formData, cookies.Authorization),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });

      toast.success('عکس شما با موفقیت تغییر کرد');
    },
    onError: () => {
      console.log('erroe');
    },
  });
};

export const useDeleteAvatar = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(['Authorization']);

  return useMutation({
    mutationFn: () => api.deleteUserAvatar(cookies.Authorization),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });

      toast.success('عکس شما با موفقیت  پاک شد');
    },
  });
};

export const useEditUserData = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(['Authorization']);

  return useMutation({
    mutationFn: (formData: any) =>
      api.editUserData(formData, cookies.Authorization),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });

      toast.success('اطلاعات شما با موفقیت تغییر کرد');
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

export const useResetPassword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: any) => api.resetPassword(formData),
    onSuccess: (data) => {
      toast.success('رمز عبور شما با موفقیت تغییر کرد');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
};

export const useForgotPassword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: any) => api.forgotPassword(formData),
    onSuccess: (data) => {
      toast.success('ایمیل با موفقیت ارسال شد');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
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
      router.push('/profile/edit-profile');
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
      router.push('/profile/edit-profile');
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
