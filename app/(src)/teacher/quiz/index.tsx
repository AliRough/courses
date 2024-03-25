'use client'

import Image from "next/image";

const ProfileTeacherQuizT = () => {

    console.log('Not completed')

    return (<>
        <div className="card border bg-transparent rounded-3">

            <div className="card-header bg-transparent border-bottom px-3">
                <div className="row g-4 align-items-center">
                    <div className="col-md-2">
                    <Image unoptimized={true} width='500' height='500'  src="/images/courses/4by3/01.jpg" className="rounded-2" alt="Card image"/>
                    </div>
                    <div className="col-md-10">

                        <h3 className="card-title mb-0 fs-5"><a href="#">آموزش رایگان Blazor WebAssembly</a></h3>
                    </div>
                </div>
            </div>



            <div className="card-body p-4">


                <div className="accordion accordion-icon accordion-bg-light" id="accordionExample">

                    <div className="accordion-item mb-3">
                        <h6 className="accordion-header" id="headingOne">
                            <button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="text-secondary fw-bold me-3">01</span>
                                <span className="fw-bold">فریم ورک‌ها و کتابخانه‌های CSS</span>
                            </button>
                        </h6>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body mt-3">

                                <p className="mb-3"><b className="text-dark">A</b> ساخت رابط کاربری و بررسی پروژه عملی دوره</p>
                                <p className="mb-3"><b className="text-dark">B</b> بررسی ابزار ها و ایجاد پروژه</p>
                                <p className="mb-3"><b className="text-dark">C</b> پیش نیاز های دوره و نصب پیش نیاز ها</p>
                                <p className="mb-3"><b className="text-dark">D</b> طراحی رابط کاربری اپلیکیشن</p>


                                <a href="#" className="btn btn-sm btn-success-soft mb-0" data-bs-toggle="modal" data-bs-target="#editQuestion">ویرایش</a>
                                <button className="btn btn-danger-soft btn-sm mb-0">حذف</button>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item mb-3">
                        <h6 className="accordion-header" id="headingTwo">
                            <button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="text-secondary fw-bold me-3">02</span>
                                <span className="fw-bold">تفاوت بین Domain و URL</span>
                            </button>
                        </h6>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body mt-3">

                                <p className="mb-3"><b className="text-dark">A</b> ساخت رابط کاربری و بررسی پروژه عملی دوره</p>
                                <p className="mb-3"><b className="text-dark">B</b> بررسی ابزار ها و ایجاد پروژه</p>
                                <p className="mb-3"><b className="text-dark">C</b> پیش نیاز های دوره و نصب پیش نیاز ها</p>
                                <p className="mb-3"><b className="text-dark">D</b> طراحی رابط کاربری اپلیکیشن</p>


                                <a href="#" className="btn btn-sm btn-success-soft mb-0" data-bs-toggle="modal" data-bs-target="#editQuestion">ویرایش</a>
                                <button className="btn btn-danger-soft btn-sm mb-0">حذف</button>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item mb-3">
                        <h6 className="accordion-header" id="headingThree">
                            <button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="text-secondary fw-bold me-3">03</span>
                                <span className="fw-bold">چه کسانی باید در این دوره شرکت کنند؟</span>
                            </button>
                        </h6>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body mt-3">

                                <p className="mb-3"><b className="text-dark">A</b> ساخت رابط کاربری و بررسی پروژه عملی دوره</p>
                                <p className="mb-3"><b className="text-dark">B</b> بررسی ابزار ها و ایجاد پروژه</p>
                                <p className="mb-3"><b className="text-dark">C</b> پیش نیاز های دوره و نصب پیش نیاز ها</p>
                                <p className="mb-3"><b className="text-dark">D</b> طراحی رابط کاربری اپلیکیشن</p>


                                <a href="#" className="btn btn-sm btn-success-soft mb-0" data-bs-toggle="modal" data-bs-target="#editQuestion">ویرایش</a>
                                <button className="btn btn-danger-soft btn-sm mb-0">حذف</button>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h6 className="accordion-header" id="headingFour">
                            <button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span className="text-secondary fw-bold me-3">04</span>
                                <span className="fw-bold">12 مهارت لازم برای توسعه دهندگان</span>
                            </button>
                        </h6>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body mt-3">

                                <p className="mb-3"><b className="text-dark">A</b> ساخت رابط کاربری و بررسی پروژه عملی دوره</p>
                                <p className="mb-3"><b className="text-dark">B</b> بررسی ابزار ها و ایجاد پروژه</p>
                                <p className="mb-3"><b className="text-dark">C</b> پیش نیاز های دوره و نصب پیش نیاز ها</p>
                                <p className="mb-3"><b className="text-dark">D</b> طراحی رابط کاربری اپلیکیشن</p>


                                <a href="#" className="btn btn-sm btn-success-soft mb-0" data-bs-toggle="modal" data-bs-target="#editQuestion">ویرایش</a>
                                <button className="btn btn-danger-soft btn-sm mb-0">حذف</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

        <div className="card border bg-transparent rounded-3 mt-4">

            <div className="card-header bg-transparent border-bottom">
                <h3 className="mb-0 fs-5 ff-vb">نتیجه امتحانات</h3>
            </div>

            <div className="card-body">

                <div className="row g-3 align-items-center justify-content-between mb-4">

                    <div className="col-md-8">
                        <form className="rounded position-relative">
                            <input className="form-control pe-5 bg-transparent" type="search" placeholder="جستجو" aria-label="Search" />
                            <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                                <i className="fas fa-search fs-6 "></i>
                            </button>
                        </form>
                    </div>

                    <div className="col-md-3">

                        <form>
                            <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">
                                <option value="">مرتب سازی</option>
                                <option>رایگان</option>
                                <option>جدیدترین</option>
                                <option>قدیمی ترین</option>
                            </select>
                        </form>
                    </div>
                </div>



                <div className="table-responsive border-0">
                    <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">

                        <thead>
                            <tr>
                                <th scope="col" className="border-0 rounded-start">نام</th>
                                <th scope="col" className="border-0">دوره</th>
                                <th scope="col" className="border-0">تاریخ</th>
                                <th scope="col" className="border-0">امتیاز</th>
                                <th scope="col" className="border-0 rounded-end">عملیات</th>
                            </tr>
                        </thead>


                        <tbody>

                            <tr>

                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="avatar avatar-sm me-2">
                                            <Image unoptimized={true} width='500' height='500' src="/images/avatar/01.jpg" className="rounded" alt="" />
                                        </div>
                                        <div>

                                            <h6 className="mb-0"><a href="#">الهام حسینی</a></h6>
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    <h6 className="table-responsive-title mt-2 mt-md-0 mb-0 fw-normal"><a href="#">دوره های کامل بازاریابی دیجیتال - 12 دوره در 1</a></h6>
                                </td>


                                <td>1400/1/12</td>


                                <td>450/500</td>


                                <td>
                                    <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="ارسال پیام"><i className="far fa-envelope"></i></a>
                                </td>
                            </tr>


                            <tr>

                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="avatar avatar-sm me-2">
                                            <Image unoptimized={true} width='500' height='500' src="/images/avatar/03.jpg" className="rounded" alt="" />
                                        </div>
                                        <div>

                                            <h6 className="mb-0"><a href="#">پوریا احمدی</a></h6>
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    <h6 className="table-responsive-title mt-2 mt-md-0 mb-0 fw-normal"><a href="#">دوره های کامل بازاریابی دیجیتال - 12 دوره در 1</a></h6>
                                </td>


                                <td>1399/12/4</td>


                                <td>425/500</td>


                                <td>
                                    <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="ارسال پیام"><i className="far fa-envelope"></i></a>
                                </td>
                            </tr>


                            <tr>

                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="avatar avatar-sm me-2">
                                            <Image unoptimized={true} width='500' height='500' src="/images/avatar/04.jpg" className="rounded" alt="" />
                                        </div>
                                        <div>

                                            <h6 className="mb-0"><a href="#">مهدی علیزاده</a></h6>
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    <h6 className="table-responsive-title mt-2 mt-md-0 mb-0 fw-normal"><a href="#">دوره های کامل بازاریابی دیجیتال - 12 دوره در 1</a></h6>
                                </td>


                                <td>1399/11/14</td>


                                <td>385/500</td>


                                <td>
                                    <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="ارسال پیام"><i className="far fa-envelope"></i></a>
                                </td>
                            </tr>


                            <tr>

                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="avatar avatar-sm me-2">
                                            <Image unoptimized={true} width='500' height='500' src="/images/avatar/09.jpg" className="rounded" alt="" />
                                        </div>
                                        <div>

                                            <h6 className="mb-0"><a href="#">نیلوفر جلیلی</a></h6>
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    <h6 className="table-responsive-title mt-2 mt-md-0 mb-0 fw-normal"><a href="#">دوره های کامل بازاریابی دیجیتال - 12 دوره در 1</a></h6>
                                </td>


                                <td>1399/10/7</td>


                                <td>398/500</td>


                                <td>
                                    <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="ارسال پیام"><i className="far fa-envelope"></i></a>
                                </td>
                            </tr>


                            <tr>

                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="avatar avatar-sm me-2">
                                            <Image unoptimized={true} width='500' height='500' src="/images/avatar/07.jpg" className="rounded" alt="" />
                                        </div>
                                        <div>

                                            <h6 className="mb-0"><a href="#">علی محمدی</a></h6>
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    <h6 className="table-responsive-title mt-2 mt-md-0 mb-0 fw-normal"><a href="#">دوره های کامل بازاریابی دیجیتال - 12 دوره در 1</a></h6>
                                </td>


                                <td>1399/9/10</td>


                                <td>428/500</td>


                                <td>
                                    <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="ارسال پیام"><i className="far fa-envelope"></i></a>
                                </td>
                            </tr>


                            <tr>

                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="avatar avatar-sm me-2">
                                            <Image unoptimized={true} width='500' height='500' src="/images/avatar/06.jpg" className="rounded" alt="" />
                                        </div>
                                        <div>

                                            <h6 className="mb-0"><a href="#">لیلا حاتمی</a></h6>
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    <h6 className="table-responsive-title mt-2 mt-md-0 mb-0 fw-normal"><a href="#">دوره های کامل بازاریابی دیجیتال - 12 دوره در 1</a></h6>
                                </td>


                                <td>1399/8/14</td>


                                <td>486/500</td>


                                <td>
                                    <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="ارسال پیام"><i className="far fa-envelope"></i></a>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>



                <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">

                    <p className="mb-0 text-center text-sm-start">نمایش 1 تا 8 از 20</p>

                    <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                        <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                            <li className="page-item mb-0"><a className="page-link" href="#" tabIndex="-1"><i className="fas fa-angle-right"></i></a></li>
                            <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                            <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                            <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-left"></i></a></li>
                        </ul>
                    </nav>
                </div>

            </div>

        </div>
    </>);
}

export default ProfileTeacherQuizT;