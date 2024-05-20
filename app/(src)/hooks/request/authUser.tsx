'use client';

import * as api from '@/app/(src)/api/authApi';

import { useMutation } from '@tanstack/react-query';

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


export const useAuthUser: any = (data: any) =>
  useMutation({
    mutationFn: api.registerUser,
    onSuccess: (e) => {
      // SetUserAtom(e.data.token);
      console.log('dataaa', e.data.token);
    },
  });
{
  /*
export const authUser = (data: any) => {
  return useMutation({
    mutationFn: () => {
      return api.registerUser(data);
    },
  });
};

export const useCourseById = (id: number): UseQueryResult<TCourse, Error> => {
    return useQuery({ queryKey: ['course', id], queryFn: () => api.CourseByIdApi(id) })
}
*/
}

{
  /*
export const useReqCheckPhone = () =>
  useMutation({ mutationFn: api.registerUser });

export const useReqOtp = () => useMutation({ mutationFn: api.OtpApiV1 });

export const useReqRegister = () =>
  useMutation({
    mutationFn: api.RegisterApiV1,
    onSuccess: (e) => {
      if (e.status === 200) {
        SetCookieAuth(e.data.token);
        window.location.replace(GetPathRedirect());
      }
    },
  });

export const useReqForgetPassword = () =>
  useMutation({ mutationFn: api.ForgetPasswordApiV1 });

export const useReqLogin = () =>
  useMutation({
    mutationFn: api.LoginApiV1,
    onSuccess: (e) => {
      if (e.status === 200) {
        SetCookieAuth(e.data.token);
        window.location.replace(GetPathRedirect());
      }
    },
  });

export const useReqOtpReceiver = () =>
  useMutation({ mutationFn: api.OtpReceiverApiV1 });

export const useReqCheckOtpReceiver = () =>
  useMutation({ mutationFn: api.CheckOtpReceiverApiV1 });

export const useReqResendOtp = () =>
  useMutation({ mutationFn: api.ResendOtpApiV1 });
*/
}
