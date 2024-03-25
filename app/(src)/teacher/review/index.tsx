'use client'

const ProfileTeacherReviewT = () => {

    console.log('Not completed')

    return (

        <div className="card border bg-transparent rounded-3">

            <div className="card-header bg-transparent border-bottom">
                <div className="row justify-content-between align-middle">

                    <div className="col-sm-6">
                        <h3 className="card-header-title mb-2 mb-sm-0 fs-5 ff-vb">دیدگاه ها</h3>
                    </div>


                    <div className="col-sm-4">
                        <form>
                            <select className="form-select js-choice z-index-9 bg-white" aria-label=".form-select-sm">
                                <option value="">مرتب سازی</option>
                                <option>★★★★★ (5/5)</option>
                                <option>★★★★☆ (4/5)</option>
                                <option>★★★☆☆ (3/5)</option>
                                <option>★★☆☆☆ (2/5)</option>
                                <option>★☆☆☆☆ (1/5)</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>



            <div className="card-body mt-2 mt-sm-4">


                <div className="d-sm-flex">

                    <img className="avatar avatar-lg rounded-circle float-start me-3" src="/images/avatar/01.jpg" alt="avatar" />
                    <div>
                        <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">

                            <div>
                                <h5 className="m-0">الهام حسینی</h5>
                                <span className="me-3 small">11 آذر، 1400 در 6:10 </span>
                            </div>

                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0"><i className="far fa-star text-warning"></i></li>
                            </ul>
                        </div>

                        <h6 className="fw-normal"><span className="text-body fw-light">دیدگاه درمورد:</span> نحوه پیاده سازی نقشه سایت در sass</h6>
                        <p>در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>

                        <div className="text-end">
                            <a href="#" className="btn btn-sm btn-primary-soft mb-1 mb-sm-0">دایرکت</a>
                            <a className="btn btn-sm btn-light mb-0" data-bs-toggle="collapse" href="#collapseComment" role="button" aria-expanded="false" aria-controls="collapseComment">
                                پاسخ
                            </a>

                            <div className="collapse show" id="collapseComment">
                                <div className="d-flex mt-3">
                                    <textarea className="form-control mb-0" placeholder="ثبت دیدگاه ..." rows="2" spellcheck="false"></textarea>
                                    <button className="btn btn-sm btn-primary-soft ms-2 px-4 mb-0 flex-shrink-0"><i className="fas fa-paper-plane fs-5"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />



                <div className="d-sm-flex">

                    <img className="avatar avatar-lg rounded-circle float-start me-3" src="/images/avatar/03.jpg" alt="avatar" />
                    <div>
                        <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">

                            <div>
                                <h5 className="m-0">پوریا احمدی</h5>
                                <span className="me-3 small">11 آذر، 1400 در 6:10</span>
                            </div>

                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                            </ul>
                        </div>

                        <h6 className="fw-normal"><span className="text-body fw-light">دیدگاه درمورد:</span> یک برنامه Angular چگونه کار می کند؟</h6>
                        <p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>

                        <div className="text-end">
                            <a href="#" className="btn btn-sm btn-primary-soft mb-0">دایرکت</a>
                            <a href="#" className="btn btn-sm btn-light mb-0">پاسخ</a>
                        </div>
                    </div>
                </div>

                <hr />



                <div className="d-sm-flex">

                    <img className="avatar avatar-lg rounded-circle float-start me-3" src="/images/avatar/05.jpg" alt="avatar" />
                    <div>
                        <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">

                            <div>
                                <h5 className="m-0">لیندا محمدی</h5>
                                <span className="me-3 small">11 آذر، 1400 در 6:10</span>
                            </div>

                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                            </ul>
                        </div>

                        <h6 className="fw-normal"><span className="text-body fw-light">دیدگاه درمورد:</span> Flexbox چیست و در مورد خواص پرکاربرد آن توضیح دهید؟</h6>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>

                        <div className="text-end">
                            <a href="#" className="btn btn-sm btn-primary-soft mb-0">دایرکت</a>
                            <a href="#" className="btn btn-sm btn-light mb-0">پاسخ</a>
                        </div>
                    </div>
                </div>

                <hr />



                <div className="d-sm-flex">

                    <img className="avatar avatar-lg rounded-circle float-start me-3" src="/images/avatar/08.jpg" alt="avatar" />
                    <div>
                        <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">

                            <div>
                                <h5 className="m-0">مهدی شفیعی</h5>
                                <span className="me-3 small">11 آذر، 1400 در 6:10</span>
                            </div>

                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                            </ul>
                        </div>

                        <h6 className="fw-normal"><span className="text-body fw-light">دیدگاه درمورد:</span> انواع داده های مختلف موجود در جاوا اسکریپت چیست؟</h6>
                        <p>در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>

                        <div className="text-end">
                            <a href="#" className="btn btn-sm btn-primary-soft mb-0">دایرکت</a>
                            <a href="#" className="btn btn-sm btn-light mb-0">پاسخ</a>
                        </div>
                    </div>
                </div>

                <hr />



                <div className="d-sm-flex">

                    <img className="avatar avatar-lg rounded-circle float-start me-3" src="/images/avatar/09.jpg" alt="avatar" />
                    <div>
                        <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">

                            <div>
                                <h5 className="m-0">نیلوفر جلیلی</h5>
                                <span className="me-3 small">11 آذر، 1400 در 6:10</span>
                            </div>

                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                            </ul>
                        </div>

                        <h6 className="fw-normal"><span className="text-body fw-light">دیدگاه درمورد:</span> نمونه های اولیه شی چیست؟</h6>
                        <p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>

                        <div className="text-end">
                            <a href="#" className="btn btn-sm btn-primary-soft mb-0">دایرکت</a>
                            <a href="#" className="btn btn-sm btn-light mb-0">پاسخ</a>
                        </div>
                    </div>
                </div>

            </div>


            <div className="card-footer border-top">

                <div className="d-sm-flex justify-content-sm-between align-items-sm-center">

                    <p className="mb-0 text-center text-sm-start">نمایش 1 تا 8 از 20</p>

                    <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                        <ul className="pagination pagination-sm pagination-primary-soft my-0 py-0">
                            <li className="page-item my-0"><a className="page-link" href="#" tabIndex="-1"><i className="fas fa-angle-left"></i></a></li>
                            <li className="page-item my-0"><a className="page-link" href="#">1</a></li>
                            <li className="page-item my-0 active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item my-0"><a className="page-link" href="#">3</a></li>
                            <li className="page-item my-0"><a className="page-link" href="#"><i className="fas fa-angle-right"></i></a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
}

export default ProfileTeacherReviewT;