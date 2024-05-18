// 'use client';
// import { selector } from 'recoil';
// import { todoListFilterState, todoListState } from './atoms';

// export const authUser = selector({
//   key: 'authUser',
//   get: ({ get }) => {
//     const filter = get(todoListFilterState);
//     const list = get(todoListState);

//     switch (filter) {
//       case 'completed':
//         return list.filter((item) => item.isCompleted);
//       case 'uncompleted':
//         return list.filter((item) => !item.isCompleted);
//       default:
//         // all
//         return list;
//     }
//   },
// });
// export const filteredTodoListState2 = selector({
//   key: 'filteredTodoListState',
//   get: ({ get }) => {
//     const filter = get(todoListFilterState);
//     const list = get(todoListState);

//     switch (filter) {
//       case 'completed':
//         return list.filter((item) => item.isCompleted);
//       case 'uncompleted':
//         return list.filter((item) => !item.isCompleted);
//       default:
//         // all
//         return list;
//     }
//   },
// });
// export const filteredTodoListState = selector({
//   key: 'filteredTodoListState',
//   get: ({ get }) => {
//     const filter = get(todoListFilterState);
//     const list = get(todoListState);

//     switch (filter) {
//       case 'completed':
//         return list.filter((item) => item.isCompleted);
//       case 'uncompleted':
//         return list.filter((item) => !item.isCompleted);
//       default:
//         // all
//         return list;
//     }
//   },
// });

// export const currentUserNameQuery = selector({
//   key: 'CurrentUserName',
//   get: async ({ get }) => {
//     const response: any = await fetch(
//       `https://api.github.com/users/ozcanzaferayan`,
//     );
//     if (response?.error) {
//       throw response?.error;
//     }
//     const json = await response.json();
//     return json.name;
//   },
// });
