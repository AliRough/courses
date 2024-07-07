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

export const packageIdState: any = atom({
  key: 'PackageId',
  default: undefined,
});

const localStorageEffect =
  (key: any) =>
  ({ setSelf, onSet }: any) => {
    console.log(key);

    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, oo: any, isReset: any) => {

      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const cartState: any = atom({
  key: 'cart',
  default: null,
  effects: [localStorageEffect('current_user')],
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
