import React from 'react';

export default function LoadingCourse({ number }: any) {
  let loadingCard = [];
  for (let i = 0; i < number; i++) {
    loadingCard.push(i + 1);
  }
  console.log(number, loadingCard);

  return loadingCard.map((item) => (
    <div key={item} className='col-sm-6 col-xl-4 tw-animate-pulse'>
      <div className=' bg-white tw-shadow-lg tw-rounded-2xl p-2'>
        <div className='tw-h-40  tw-w-full tw-bg-gray-100 tw-rounded-xl'></div>
        <div className='tw-w-full tw-rounded-full tw-bg-gray-100 tw-h-5 tw-mt-1'></div>
        <div className='tw-w-full tw-rounded-full tw-bg-gray-100 tw-h-5 tw-mt-1'></div>
        <div className='tw-w-1/2 tw-rounded-full tw-bg-gray-100 tw-h-5 tw-mt-1'></div>
        <div className='tw-w-1/3 tw-rounded-full tw-bg-gray-100 tw-h-5 tw-mt-1 mb-5'></div>
      </div>
    </div>
  ));
}
