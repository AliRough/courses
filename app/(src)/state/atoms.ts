'use client';
import { atom } from 'recoil';

export const authUserState: any = atom({
  key: 'authUser',
  default: {
    name: null,
    email: null,
    password: null,
    passwordConfirmation: null,
    aliasName: null,
    mobile: null,
    emailVerifiedAt: null,
    mobileVerifiedAt: null,
    createdAt: null,
  },
});

export const showfirstState: any = atom({
  key: 'showfirst',
  default: {
    category: null,
    package: null,
  },
});

// export const todoListState = atom({
//   key: 'todoListState',
//   default: [
//     { name: 'Apples', isCompleted: false },
//     { name: 'Eggs', isCompleted: false },
//     { name: 'Butter', isCompleted: false },
//   ],
// });
// export const todoListState2 = atom({
//   key: 'todoListState',
//   default: [
//     { name: 'Apples', isCompleted: false },
//     { name: 'Eggs', isCompleted: false },
//     { name: 'Butter', isCompleted: false },
//   ],
// });

// export const todoListFilterState = atom({
//   key: 'todoListFilterState',
//   default: 'Hepsini göster',
// });
