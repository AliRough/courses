'use client';
import React from 'react';
import HeaderBody from '../componenets/headerBody';
import { useRecoilState } from 'recoil';
import { cartState } from '../state/atoms';
import Link from 'next/link';

export default function Cart() {
  const [cart, setCart] = useRecoilState<any>(cartState);

  let removeFromCart = (e: any, cId: any) => {
    e.preventDefault();
    console.log(
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentNode,
    );

    e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
      '-tw-translate-x-full',
    );
    setTimeout(() => {
      setCart((cart: any) => {
        let newCart = cart?.filter((cartCourse: any) => {
          console.log(cartCourse?.id !== cId);
          return cartCourse?.id !== cId;
        });
        console.log(newCart);

        if (newCart) {
          return [...newCart];
        }
      });
    }, 500);
  };

  let totalCart: number = 0;

  return (
    <>
      <HeaderBody name={'سبد خرید'} />
      {cart && cart[0] ? (
        <section className='pt-5'>
          <div className='container'>
            <div className='row g-4 g-sm-5'>
              {/* Main content START */}
              <div className='col-lg-8 mb-4 mb-sm-0 '>
                <div className='card card-body p-4 shadow !tw-min-h-56'>
                  <div className='table-responsive border-0 rounded-3'>
                    {/* Table START */}
                    <div className='table align-middle  mb-0'>
                      {/* Table head */}
                      {/* Table body START */}
                      <ul className='border-top-0 tw-ps-0'>
                        {cart &&
                          cart[0] &&
                          cart.map((cartCourse: any) => {
                            totalCart = totalCart + Number(cartCourse.price);

                            return (
                              <li
                                key={cartCourse.id}
                                className='tw-relative hover:tw-bg-gray-100 tw-transition-all tw-duration-300 tw-left-full -tw-translate-x-full '
                              >
                                <div className=' tw-flex   gap-2 p-2 px-2 '>
                                  <div className='tw-relative tw-w-max tw-top-0 tw-left-0 tw-flex tw-items-center tw-justify-end'>
                                    <div className='tw-rounded-lg tw-transition-all tw-duration-300  hover:tw-bg-red-500 hover:tw-text-white'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        className='tw-w-6 '
                                      >
                                        <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
                                      </svg>
                                      <button
                                        className='tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0 '
                                        tabIndex={0}
                                        onClick={(e) =>
                                          removeFromCart(e, cartCourse?.id)
                                        }
                                      ></button>
                                    </div>
                                  </div>
                                  <img
                                    className='tw-aspect-square tw-object-cover sm:tw-w-14 tw-w-10 tw-rounded-lg'
                                    src={cartCourse?.cover}
                                    alt=''
                                  />
                                  <div className='tw-w-full '>
                                    <h5 className='tw-text-sm tw-font-normal tw-w-max sm:tw-max-w-52 tw-max-w-40 tw-line-clamp-1'>
                                      {cartCourse?.title}{' '}
                                    </h5>
                                    <span className='tw-block tw-w-full tw-text-left tw-text-sm '>
                                      {cartCourse?.price === 0
                                        ? 'رایگان'
                                        : cartCourse?.price
                                            .toString()
                                            .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              ',',
                                            ) + 'تومان'}{' '}
                                    </span>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main content END */}
              {/* Right sidebar START */}
              <div className='col-lg-4'>
                {/* Card total START */}
                <div className='card card-body p-4 shadow'>
                  {/* Title */}
                  <h4 className='mb-3 fs-5'>صورت حساب</h4>
                  {/* Coupon input and button */}

                  <div className='my-2'>
                    <label htmlFor='' className='mb-2'>
                      کد تخفیف دارید؟
                    </label>
                    <div className='input-group'>
                      <input
                        className='form-control form-control '
                        // placeholder
                      />
                      <button type='button' className='btn btn-primary'>
                        اعمال{' '}
                      </button>
                    </div>
                  </div>
                  {/* Price and detail */}
                  <ul className='list-group list-group-borderless mb-2'>
                    <li className='list-group-item px-0 d-flex justify-content-between'>
                      <span className='h6 fw-light mb-0'>قیمت</span>
                      <span className='h6 fw-light mb-0 fw-bold'>
                        {totalCart
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                        تومان
                      </span>
                    </li>
                    <li className='list-group-item px-0 d-flex justify-content-between'>
                      <span className='h6 fw-light mb-0'>کد تخفیف</span>
                      <span className='text-danger'>20%</span>
                    </li>
                    <li className='list-group-item px-0 d-flex justify-content-between'>
                      <span className='h5 mb-0'>قیمت نهایی</span>
                      <span className='h5 mb-0'>
                        {Math.floor(totalCart - (totalCart / 100) * 20)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                        تومان
                      </span>
                    </li>
                  </ul>
                  {/* Button */}
                  <div className='d-grid'>
                    <a href='checkout.html' className='btn btn-lg btn-success'>
                      تسویه حساب
                    </a>
                  </div>
                  {/* Content */}
                  <p className='small mb-0 mt-2 text-center'>
                    با تکمیل خرید خود،{' '}
                    <a href='#'>
                      <strong>شرایط و قوانین سایت</strong>
                    </a>{' '}
                    را خواهید پذیرفت.
                  </p>
                </div>
                {/* Card total END */}
              </div>
              {/* Right sidebar END */}
            </div>
            {/* Row END */}
          </div>
        </section>
      ) : (
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                {/* Image */}
                <img
                  src='/images/element/cart.svg'
                  className='h-200px h-md-300px mb-3 mx-auto'
                  alt=''
                />
                {/* Subtitle */}
                <h2 className='fs-4 mt-5'>
                  سبد خرید شما در حال حاضر خالی است!
                </h2>
                {/* info */}
                <p className='mb-0'>
                  لطفاً تمام دوره های موجود را بررسی کنید و دوره هایی را خریداری
                  کنید که نیازهای شما را برآورده می کند.
                </p>
                {/* Button */}
                <Link href='/' className='btn btn-primary mt-4 mb-0'>
                  بازگشت به خانه
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
