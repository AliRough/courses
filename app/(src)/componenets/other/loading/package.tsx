import React from 'react';

export default function LoadingPackage({ number }: any) {
  let loadingCard = [];
  for (let i = 0; i < number; i++) {
    loadingCard.push(i + 1);
  }
  console.log(number, loadingCard);

  return loadingCard.map((item) => (
    <div key={item} className='tw-text-gray-600 tw-flex pe-3 tw-animate-pulse'>
      <div className='tw-bg-white  tw-rounded-xl tw-w-full tw-shadow-lg  overflow-hidden mb-3'>
        <div className='tw-flex tw-w-full tw-p-4 '>
          <div className='sm:tw-w-1/5 tw-w-2/5 tw-flex tw-h-28 tw-bg-gray-200 tw-rounded-xl'></div>
          <div className='tw-w-4/5 tw-flex tw-flex-col  tw-ps-6'>
            <div className=' tw-h-4 tw-m-1 tw-rounded-full tw-bg-gray-200 '></div>
            <div className='tw-w-1/2 tw-m-1 tw-h-4 tw-rounded-full tw-bg-gray-200 '></div>
            <div className='tw-w-1/3 tw-m-1 tw-h-4 tw-rounded-full tw-bg-gray-200 '></div>
            <div className='tw-w-1/4 tw-m-1 tw-h-4 tw-rounded-full tw-bg-gray-200 '></div>
          </div>
        </div>
      </div>
    </div>
  ));
}
