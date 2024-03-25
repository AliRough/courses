'use client'

const CreateCourseT = () => {

    console.log('Not completed')

    return (<>

        <section className="py-0 bg-blue h-100px align-items-center d-flex h-200px rounded-0" style={{ background: "url(/images/pattern/04.png) no-repeat center center", backgroundSize: "cover" }}>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">

                        <h1 className="text-white">افزودن دوره</h1>
                        <p className="text-white mb-0">لطفا <a href="#" className="text-white"><u>"قبل از افزودن دوره"</u></a> مقاله ما را بخوانید.</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto text-center">

                        <p className="text-center">از این رابط برای اضافه کردن یک دوره جدید به پورتال استفاده کنید. پس از اتمام افزودن مورد، از نظر کیفیت بررسی می شود. در صورت تایید، دوره شما برای فروش ظاهر می شود و از طریق ایمیل به شما اطلاع داده می شود که دوره شما پذیرفته شده است.</p>
                    </div>
                </div>

                <div className="card bg-transparent border rounded-3 mb-5">
                    <div id="stepper" className="bs-stepper stepper-outline">

                        <div className="card-header bg-light border-bottom px-lg-5">

                            <div className="bs-stepper-header" role="tablist">

                                <div className="step" data-target="#step-1">
                                    <div className="d-grid text-center align-items-center">
                                        <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
                                            <span className="bs-stepper-circle">1</span>
                                        </button>
                                        <h6 className="bs-stepper-label d-none d-md-block">جزئیات دوره</h6>
                                    </div>
                                </div>
                                <div className="line"></div>


                                <div className="step" data-target="#step-2">
                                    <div className="d-grid text-center align-items-center">
                                        <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
                                            <span className="bs-stepper-circle">2</span>
                                        </button>
                                        <h6 className="bs-stepper-label d-none d-md-block">رسانه</h6>
                                    </div>
                                </div>
                                <div className="line"></div>

                                <div className="step" data-target="#step-3">
                                    <div className="d-grid text-center align-items-center">
                                        <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
                                            <span className="bs-stepper-circle">3</span>
                                        </button>
                                        <h6 className="bs-stepper-label d-none d-md-block">جلسات دوره </h6>
                                    </div>
                                </div>
                                <div className="line"></div>

                                <div className="step" data-target="#step-4">
                                    <div className="d-grid text-center align-items-center">
                                        <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4" aria-controls="step-4">
                                            <span className="bs-stepper-circle">4</span>
                                        </button>
                                        <h6 className="bs-stepper-label d-none d-md-block">اطلاعات تکمیلی</h6>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="card-body">

                            <div className="bs-stepper-content">
                                <form onsubmit="return false">

                                    <div id="step-1" role="tabpanel" className="content fade" aria-labelledby="steppertrigger1">

                                        <h4 className="fs-5 ff-vb">جزئیات دوره</h4>

                                        <hr />


                                        <div className="row g-4">

                                            <div className="col-12">
                                                <label className="form-label">عنوان</label>
                                                <input className="form-control" type="text" placeholder="آموزش ساخت وب سایت خبری" />
                                            </div>


                                            <div className="col-12">
                                                <label className="form-label">توضیحات کوتاه</label>
                                                <textarea className="form-control" rows="2" placeholder="کلمات کلیدی"></textarea>
                                            </div>


                                            <div className="col-md-6">
                                                <label className="form-label">دسته بندی</label>
                                                <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm" data-search-enabled="true">
                                                    <option value="">انتخاب</option>
                                                    <option>مهندسی</option>
                                                    <option>پزشکی</option>
                                                    <option>طراحی وب</option>
                                                    <option>حسابداری</option>
                                                    <option>برنامه نویسی</option>
                                                </select>
                                            </div>


                                            <div className="col-md-6">
                                                <label className="form-label">سطح دوره</label>
                                                <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm" data-search-enabled="false" data-remove-item-button="true">
                                                    <option value="">انتخاب سطح</option>
                                                    <option>همه</option>
                                                    <option>مقدماتی</option>
                                                    <option>متوسطه</option>
                                                    <option>پیشرفته</option>
                                                </select>
                                            </div>


                                            <div className="col-md-6">
                                                <label className="form-label">زبان</label>
                                                <select className="form-select js-choice border-0 z-index-9 bg-transparent" multiple="multiple" aria-label=".form-select-sm" data-max-item-count="3" data-remove-item-button="true">
                                                    <option value="">انتخاب زبان</option>
                                                    <option>انگلیسی</option>
                                                    <option>آلمانی</option>
                                                    <option>فرانسوی</option>
                                                    <option>فارسی</option>
                                                </select>
                                            </div>


                                            <div className="col-md-6 d-flex align-items-center justify-content-start mt-5">
                                                <div className="form-check form-switch form-check-md">
                                                    <input className="form-check-input" type="checkbox" id="checkPrivacy1" />
                                                    <label className="form-check-label" htmlFor="checkPrivacy1">دوره ویژه</label>
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <label className="form-label">مدت زمان دوره</label>
                                                <input className="form-control" type="text" placeholder="4:33:00" />
                                            </div>


                                            <div className="col-md-6">
                                                <label className="form-label">تعداد ویدیوها</label>
                                                <input className="form-control" type="text" placeholder="19 ویدیو" />
                                            </div>


                                            <div className="col-md-6">
                                                <label className="form-label">قیمت</label>
                                                <input type="text" className="form-control" placeholder="90,000 تومان" />
                                            </div>


                                            <div className="col-md-6">
                                                <label className="form-label">تخفیف</label>
                                                <input className="form-control" type="text" placeholder="50%" />
                                                <div className="col-12 mt-1 mb-0">
                                                    <div className="form-check small mb-0">
                                                        <input className="form-check-input" type="checkbox" id="checkBox1" />
                                                        <label className="form-check-label" htmlFor="checkBox1">
                                                            فعالسازی تخفیف
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <label className="form-label">توضیحات</label>

                                                <div className="bg-light border border-bottom-0 rounded-top py-3" id="quilltoolbar">
                                                    <span className="ql-formats">
                                                        <select className="ql-size"></select>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-bold"></button>
                                                        <button className="ql-italic"></button>
                                                        <button className="ql-underline"></button>
                                                        <button className="ql-strike"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <select className="ql-color"></select>
                                                        <select className="ql-background"></select>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-code-block"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-list" value="ordered"></button>
                                                        <button className="ql-list" value="bullet"></button>
                                                        <button className="ql-indent" value="-1"></button>
                                                        <button className="ql-indent" value="+1"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-link"></button>
                                                        <button className="ql-image"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-clean"></button>
                                                    </span>
                                                </div>


                                                <div className="bg-body border rounded-bottom h-400px overflow-hidden" id="quilleditor">
                                                    <br />
                                                    <h1>آموزش web scraping با Node js (پیشرفته)</h1>
                                                    <br />
                                                    <p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                                                    <br />
                                                    <p>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    <br />
                                                    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                                                    <br />
                                                    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>

                                                    <p>در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                    <br />
                                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                    <br />
                                                    <p> کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                                    <br />
                                                    <p> در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>

                                                    <p>برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                                                    <br />
                                                    <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد. </p>
                                                    <br />
                                                    <p> در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>
                                                    <br />
                                                    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end mt-3">
                                                <button className="btn btn-primary next-btn mb-0">مرحله بعد</button>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="step-2" role="tabpanel" className="content fade" aria-labelledby="steppertrigger2">

                                        <h4 className="fs-5 ff-vb">رسانه</h4>

                                        <hr />

                                        <div className="row">

                                            <div className="col-12">
                                                <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">

                                                    <img src="assets/images/element/gallery.svg" className="h-50px" alt="" />
                                                    <div>
                                                        <h6 className="my-2">آپلود ویدیو، عکس یـا<a href="#!" className="text-primary"> سیستم</a></h6>
                                                        <label>
                                                            <span>
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control stretched-link upload-name border-end-0" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                                                                    <span className="btn btn btn-secondary-soft cursor-pointer upload-button border-start-0">آپلود فایل</span>
                                                                </div>
                                                                <input type="file" className="d-none hidden-upload" />
                                                            </span>
                                                        </label>
                                                        <p className="small mb-0 mt-2"><b>توجه: </b> فقط JPG، JPEG و PNG. ابعاد پیشنهادی ما 600px * 450px است. تصویر بزرگتر به اندازه 4:3 برش داده می شود تا با تصاویر کوچک/پیش نمایش ما مطابقت داشته باشد.</p>
                                                    </div>
                                                </div>


                                                <div className="d-sm-flex justify-content-end mt-2">
                                                    <button type="button" className="btn btn-sm btn-danger-soft mb-3">حذف</button>
                                                </div>
                                            </div>



                                            <div className="col-12">
                                                <h5>آپلود ویدیو</h5>

                                                <div className="col-12 mt-4 mb-5">
                                                    <label className="form-label">آدرس ویدیو</label>
                                                    <input className="form-control" type="text" placeholder="https://www.aparat.com/video/video/embed/videohash/TyGZt/vt/frame" />
                                                </div>
                                                <div className="position-relative my-4">
                                                    <hr />
                                                    <p className="small position-absolute top-50 start-50 translate-middle bg-body px-3 mb-0">یـا</p>
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">آپلود ویدیو</label>

                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text" dir="ltr">.mp4</label>
                                                        <input type="text" className="form-control upload-name-mp4 border-end-0" id="inputGroupFile01" />
                                                        <span className="btn btn btn-secondary-soft cursor-pointer upload-button-mp4 border-start-0">آپلود فایل</span>

                                                    </div>
                                                    <input type="file" className="d-none hidden-upload-mp4" />


                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text" dir="ltr">.WebM</label>
                                                        <input type="text" className="form-control upload-name-web border-end-0" id="inputGroupFile02" />
                                                        <span className="btn btn btn-secondary-soft cursor-pointer upload-button-web border-start-0">آپلود فایل</span>

                                                    </div>
                                                    <input type="file" className="d-none hidden-upload-web" />

                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text" dir="ltr">.OGG</label>
                                                        <input type="text" className="form-control upload-name-ogg border-end-0" id="inputGroupFile03" />
                                                        <span className="btn btn btn-secondary-soft cursor-pointer upload-button-ogg border-start-0">آپلود فایل</span>

                                                    </div>
                                                    <input type="file" className="d-none hidden-upload-ogg" />

                                                </div>


                                                <h5 className="mt-4">پیشنمایش ویدیو</h5>
                                                <div className="position-relative">

                                                    <img src="assets/images/about/04.jpg" className="rounded-4" alt="" />
                                                    <div className="position-absolute top-50 start-50 translate-middle">

                                                        <a href="https://www.aparat.com/video/video/embed/videohash/31hor/vt/frame" className="btn btn-lg text-danger btn-round btn-white-shadow mb-0" data-glightbox="" data-gallery="video-tour">
                                                            <i className="fas fa-play"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="d-flex justify-content-between mt-3">
                                                <button className="btn btn-secondary prev-btn mb-0">مرحله قبل</button>
                                                <button className="btn btn-primary next-btn mb-0">مرحله بعد</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="step-3" role="tabpanel" className="content fade" aria-labelledby="steppertrigger3">

                                        <h4 className="ff-vb fs-5">جلسات دوره</h4>

                                        <hr />

                                        <div className="row">

                                            <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                                                <h5 className="mb-2 mb-sm-0">آپلود دوره</h5>
                                                <a href="#" className="btn btn-sm btn-primary-soft mb-0" data-bs-toggle="modal" data-bs-target="#addLecture"><i className="bi bi-plus-circle me-2"></i>افزودن دوره</a>
                                            </div>


                                            <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">

                                                <div className="accordion-item mb-3">
                                                    <h6 className="accordion-header font-base" id="heading-1">
                                                        <button className="accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                                                            معرفی دوره فتوشاپ
                                                        </button>
                                                    </h6>

                                                    <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">

                                                        <div className="accordion-body mt-3">

                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="position-relative">
                                                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"><i className="fas fa-play"></i></a>
                                                                    <span className="ms-2 mb-0 h6 fw-light">معرفی دوره</span>
                                                                </div>

                                                                <div>
                                                                    <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
                                                                    <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                                                </div>
                                                            </div>

                                                            <hr />



                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="position-relative">
                                                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"><i className="fas fa-play"></i></a>
                                                                    <span className="ms-2 mb-0 h6 fw-light">دیجیتال مارکتنیگ چیست؟</span>
                                                                </div>

                                                                <div>
                                                                    <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
                                                                    <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                                                </div>
                                                            </div>

                                                            <hr />



                                                            <a href="#" className="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic"><i className="bi bi-plus-circle me-2"></i>افزودن</a>
                                                        </div>

                                                    </div>
                                                </div>



                                                <div className="accordion-item mb-3">
                                                    <h6 className="accordion-header font-base" id="heading-2">
                                                        <button className="accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                            آموزش کار به صورت متوسطه
                                                        </button>
                                                    </h6>

                                                    <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
                                                        <div className="accordion-body mt-3">

                                                            <a href="#" className="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic">
                                                                <i className="bi bi-plus-circle me-2"></i>افزودن
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="accordion-item mb-3">
                                                    <h6 className="accordion-header font-base" id="heading-3">
                                                        <button className="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                                            چقدر باید به فروشندگان پیشنهاد بدهم؟
                                                        </button>
                                                    </h6>

                                                    <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionExample2">
                                                        <div className="accordion-body mt-3">

                                                            <a href="#" className="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic">
                                                                <i className="bi bi-plus-circle me-2"></i>افزودن
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <button className="btn btn-secondary prev-btn mb-0">مرحله قبل</button>
                                                <button className="btn btn-primary next-btn mb-0">مرحله بعد</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="step-4" role="tabpanel" className="content fade" aria-labelledby="steppertrigger4">

                                        <h4 className="fs-5 ff-vb">اطلاعات تکمیلی</h4>

                                        <hr />

                                        <div className="row g-4">


                                            <div className="col-12">
                                                <div className="bg-light border rounded p-2 p-sm-4">
                                                    <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                                                        <h5 className="mb-2 mb-sm-0">آپلود سوالات متداول</h5>
                                                        <a href="#" className="btn btn-sm btn-primary-soft mb-0" data-bs-toggle="modal" data-bs-target="#addQuestion"><i className="bi bi-plus-circle me-2"></i>افزودن پرسش</a>
                                                    </div>

                                                    <div className="row g-4">
                                                        <div className="col-12">
                                                            <div className="bg-body p-3 p-sm-4 border rounded">
                                                                <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">

                                                                    <h6 className="mb-0">بازاریابی دیجیتال چگونه کار می کند؟</h6>

                                                                    <div className="align-middle">
                                                                        <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
                                                                        <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                                                    </div>
                                                                </div>

                                                                <p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <div className="bg-body p-4 border rounded">
                                                                <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">

                                                                    <h6 className="mb-0">بازاریابی دیجیتال چگونه کار می کند؟</h6>

                                                                    <div className="align-middle">
                                                                        <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
                                                                        <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                                                    </div>
                                                                </div>

                                                                <p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="col-12">
                                                <div className="bg-light border rounded p-4">
                                                    <h5 className="mb-0">برچسب ها</h5>

                                                    <div className="mt-3">
                                                        <input type="text" className="form-control js-choice mb-0" data-placeholder="true" data-placeholder-Val="" data-max-item-count="14" data-remove-item-button="true" />
                                                        <span className="small">حداکثر 14 کلمه کلیدی کلمات کلیدی همگی باید با حروف کوچک و با کاما از هم جدا شوند. به عنوان مثال، javascript، react</span>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="col-12">
                                                <div className="bg-light border rounded p-4">
                                                    <h5 className="mb-0">ثبت دیدگاه</h5>


                                                    <div className="mt-3">
                                                        <textarea className="form-control" rows="4" placeholder="دیدگاه خود را ثبت کنید" spellcheck="false"></textarea>
                                                        <div className="form-check mb-0 mt-2">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                                هر تصویر، صدا، یا سایر دارایی‌هایی که کار من نیستند، مجوز مناسبی برای استفاده در پیش‌نمایش فایل یا دوره اصلی دریافت کرده‌اند. به غیر از این موارد، این اثر کاملاً متعلق به من است و من حق کامل فروش آن را در اینجا دارم.
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="d-md-flex justify-content-between align-items-start mt-4">
                                                <button className="btn btn-secondary prev-btn mb-2 mb-md-0">مرحله قبل</button>
                                                <button className="btn btn-light me-auto ms-md-2 mb-2 mb-md-0">پیشنمایش دوره</button>
                                                <div className="text-md-end">
                                                    <a href="course-added.html" className="btn btn-success mb-2 mb-sm-0">ثبت دوره</a>
                                                    <p className="mb-0 small mt-1">پس از کلیک بر روی "ارسال یک دوره"، دوره شما آپلود می شود و به عنوان در انتظار بررسی علامت گذاری می شود.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <div className="modal fade" id="addLecture" tabIndex="-1" aria-labelledby="addLectureLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <h5 className="modal-title text-white" id="addLectureLabel">افزودن ویدیو</h5>
                        <button type="button" className="btn btn-sm btn-light mb-0" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className="modal-body">
                        <form className="row text-start g-3">

                            <div className="col-12">
                                <label className="form-label">نام ویدیو <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="نام ویدیو را وارد کنید" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal">بستن</button>
                        <button type="button" className="btn btn-success my-0">ذخیره</button>
                    </div>
                </div>
            </div>
        </div>



        <div className="modal fade" id="addTopic" tabIndex="-1" aria-labelledby="addTopicLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <h5 className="modal-title text-white" id="addTopicLabel">افزودن دوره</h5>
                        <button type="button" className="btn btn-sm btn-light mb-0" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className="modal-body">
                        <form className="row text-start g-3">

                            <div className="col-md-6">
                                <label className="form-label">نام دوره</label>
                                <input className="form-control" type="text" placeholder="نام دوره" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">لینک ویدیو</label>
                                <input className="form-control" type="text" placeholder="لینک ویدیو" />
                            </div>

                            <div className="col-12 mt-3">
                                <label className="form-label">توضیحات</label>
                                <textarea className="form-control" rows="4" placeholder="" spellcheck="false"></textarea>
                            </div>

                            <div className="col-6 mt-3">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="options" id="option1" checked />
                                    <label className="btn btn-sm btn-light btn-primary-soft-check border-0 m-0" htmlFor="option1">رایگان</label>

                                    <input type="radio" className="btn-check" name="options" id="option2" />
                                    <label className="btn btn-sm btn-light btn-primary-soft-check border-0 m-0" htmlFor="option2">پولی</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal">بستن</button>
                        <button type="button" className="btn btn-success my-0">ذخیره</button>
                    </div>
                </div>
            </div>
        </div>



        <div className="modal fade" id="addQuestion" tabIndex="-1" aria-labelledby="addQuestionLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <h5 className="modal-title text-white" id="addQuestionLabel">افزودن سوال</h5>
                        <button type="button" className="btn btn-sm btn-light mb-0" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className="modal-body">
                        <form className="row text-start g-3">

                            <div className="col-12">
                                <label className="form-label">پرسش</label>
                                <input className="form-control" type="text" placeholder="پرسش خود را ثبت کنید" />
                            </div>

                            <div className="col-12 mt-3">
                                <label className="form-label">پاسخ</label>
                                <textarea className="form-control" rows="4" placeholder="پاسخ خود را ثبت کنید" spellcheck="false"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal">بستن</button>
                        <button type="button" className="btn btn-success my-0">ذخیره</button>
                    </div>
                </div>
            </div>
        </div>



        <div className="back-top"><i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i></div>

    </>);
}

export default CreateCourseT;