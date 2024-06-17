import React from 'react';

export default function LoadingMiniPackage({ number }: any) {
  let loadingCard = [];
  for (let i = 0; i < number; i++) {
    loadingCard.push(i + 1);
  }
  console.log(number, loadingCard);

  return loadingCard.map((item) => (
    <div
      key={item}
      className='tw-flex tw-h-12 rounded tw-bg-gray-200 p-2 mt-1 tw-animate-pulse'
    >
      <div className='tw-h-full tw-aspect-square bg-white tw-rounded-full tw-bg-gray-100'></div>

      <div className='tw-w-full '>
        <div className='tw-w-1/2 tw-bg-white tw-h-2 tw-rounded-xl m-1'></div>
        <div className='tw-w-1/4 tw-bg-white tw-h-2 tw-rounded-xl m-1'></div>
      </div>
    </div>
  ));
}
