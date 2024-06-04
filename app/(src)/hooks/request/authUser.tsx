'use client';

import * as api from '@/app/(src)/api/authApi';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { TCourse } from '@/app/(src)/model/course.d';
import { useRecoilState } from 'recoil';
import { authUserState } from '../../state/atoms';

// export const useRegisterUser = () => {
//   return useQuery({ queryKey: ['registerUser'], queryFn: api.registerUser });
// };
// export const authUser = () => {
//   // const QueryClient = useQueryClient();
//   const RegisterUserMutation = useMutation({
//     mutationFn: (data) => {
//       return api.registerUser(data);
//     },
//     // onSuccess: () => {
//     //   // Invalidate and refetch
//     //   QueryClient.invalidateQueries({ queryKey: ['registerUser'] });
//     // },
//   });
// };
export const useLogOutUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (token: any) => api.logOutUser(token),
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['userData'] });

      toast.success('شما از پنل خود خارج شدید');
    },
  });
};

export const useChangeAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ formData, token }: any) =>
      api.changeUserAvatar(formData, token),
    onSuccess: () => {
      console.log('rrrrrrrrrrrrrrrresulrt', queryClient);
      queryClient.invalidateQueries({ queryKey: ['userData'] });

      toast.success('عکس شما با موفقیت تغییر کرد');
      // toast.success(result);
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

export const useGetUser = (token: any): any => {
  return useQuery({
    queryKey: ['userData'],
    queryFn: () => api.getUserByToken(token),
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

export const useAuthUser: any = (data: any) =>
  useMutation({
    mutationFn: api.registerUser,
    onSuccess: (e) => {
      // SetUserAtom(e.data.token);
      console.log('dataaa', e.data.token);
    },
  });
