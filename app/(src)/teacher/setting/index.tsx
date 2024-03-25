'use client'

const ProfileTeacherSettingT = () => {

    console.log('Not completed')

    return (
        <div className="border rounded-3">
            <div className="row">
                <div className="col-12">

                    <div className="card bg-transparent">

                        <div className="card-header bg-transparent border-bottom">
                            <h3 className="card-header-title fs-5 ff-vb">تنظیمات</h3>
                        </div>



                        <div className="card-body">


                            <h5 className="mb-4">تنظیمات پروفایل</h5>
                            <div className="form-check form-switch form-check-md">
                                <input className="form-check-input" type="checkbox" role="switch" id="profilePublic" checked />
                                <label className="form-check-label" htmlFor="profilePublic">قابل مشاهده برای عموم</label>
                            </div>


                            <hr />


                            <h5 className="card-header-title">تنظیمات نوتیفیکیشن</h5>
                            <p className="mb-2 mt-3">نوع اعلان‌هایی را که می‌خواهید دریافت کنید انتخاب کنید</p>
                            <div className="form-check form-switch form-check-md mb-3">
                                <input className="form-check-input" type="checkbox" id="checkPrivacy1" checked />
                                <label className="form-check-label" htmlFor="checkPrivacy1">هنگام ورود به سیستم از طریق ایمیل به من اطلاع دهید</label>
                            </div>
                            <div className="form-check form-switch form-check-md mb-3">
                                <input className="form-check-input" type="checkbox" id="checkPrivacy2" />
                                <label className="form-check-label" htmlFor="checkPrivacy2">ارسال پیامک تایید برای تمام پرداخت های آنلاین</label>
                            </div>
                            <div className="form-check form-switch form-check-md mb-3">
                                <input className="form-check-input" type="checkbox" id="checkPrivacy3" checked />
                                <label className="form-check-label" htmlFor="checkPrivacy3">بررسی کنید کدام دستگاه(ها) به حساب شما دسترسی دارند</label>
                            </div>
                            <div className="form-check form-switch form-check-md mb-3">
                                <input className="form-check-input" type="checkbox" id="checkPrivacy4" />
                                <label className="form-check-label" htmlFor="checkPrivacy4">پروفایل من را بصورت عمومی نشان دهید</label>
                            </div>



                            <div className="d-sm-flex justify-content-end">
                                <button type="button" className="btn btn-sm btn-primary me-2 mb-0">ذخیره</button>
                                <a href="#" className="btn btn-sm btn-outline-secondary mb-0">لغو</a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default ProfileTeacherSettingT;