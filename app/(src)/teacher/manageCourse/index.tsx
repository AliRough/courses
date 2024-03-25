'use client'

const ProfileTeacherManageCourseT = () => {

    console.log('Not completed')

    return (<div className="card border bg-transparent rounded-3">
    
    <div className="card-header bg-transparent border-bottom">
        <h3 className="mb-0 ff-vb fs-5">لیست دوره ها</h3>
    </div>
        
    <div className="card-body">

        
        <div className="row g-3 align-items-center justify-content-between mb-4">
            
            <div className="col-md-8">
                <form className="rounded position-relative">
                    <input className="form-control pe-5 bg-transparent" type="search" placeholder="جستجوی دوره" aria-label="Search"/>
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
                        <option>پرفروش ترین</option>
                        <option>پربازدید ترین</option>
                    </select>
                </form>
            </div>
        </div>
        

        
        <div className="table-responsive border-0">
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                
                <thead>
                    <tr>
                        <th scope="col" className="border-0 rounded-start">دوره</th>
                        <th scope="col" className="border-0">تعداد دانشجویان</th>
                        <th scope="col" className="border-0">وضعیت</th>
                        <th scope="col" className="border-0">قیمت</th>
                        <th scope="col" className="border-0 rounded-end">عملیات</th>
                    </tr>
                </thead>

                
                <tbody>
                    
                    <tr>
                        
                        <td>
                            <div className="d-flex align-items-center">
                                
                                <div className="w-60px">
                                    <img src="/images/courses/4by3/08.jpg" className="rounded" alt=""/>
                                </div>
                                <div className="mb-0 ms-2">
                                    
                                    <h6 className="fw-normal"><a href="#">دوره جامع آموزش Sketch</a></h6>
                                    
                                    <div className="d-sm-flex">
                                        <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2"></i>18 ویدیو</p>
                                        <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2"></i>6 تکمیل</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td className="text-center text-sm-start">125</td>
                        
                        <td>
                            <div className="badge bg-success bg-opacity-10 text-success">زنده</div>
                        </td>
                        
                        <td>180,000 تومان</td>
                        
                        <td>
                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit"></i></a>
                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                        </td>
                    </tr>

                    
                    <tr>
                        
                        <td>
                            <div className="d-flex align-items-center">
                                
                                <div className="w-60px">
                                    <img src="/images/courses/4by3/10.jpg" className="rounded" alt=""/>
                                </div>
                                <div className="mb-0 ms-2">
                                    
                                    <h6 className="fw-normal"><a href="#">دوره جامع آموزش Bootstrap</a></h6>
                                    
                                    <div className="d-sm-flex">
                                        <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2"></i>0 ویدیو</p>
                                        <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2"></i>0 تکمیل</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td className="text-center text-sm-start">145</td>
                        
                        <td>
                            <div className="badge bg-secondary bg-opacity-10 text-secondary">غیرفعال</div>
                        </td>
                        
                        <td>490,000 تومان</td>
                        
                        <td>
                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit"></i></a>
                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                        </td>
                    </tr>

                    
                    <tr>
                        
                        <td>
                            <div className="d-flex align-items-center">
                                
                                <div className="w-60px">
                                    <img src="/images/courses/4by3/06.jpg" className="rounded" alt=""/>
                                </div>
                                <div className="mb-0 ms-2">
                                    
                                    <h6 className="fw-normal"><a href="#">دوره جامع آموزش Angular</a></h6>
                                    
                                    <div className="d-sm-flex">
                                        <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2"></i>37 ویدیو</p>
                                        <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2"></i>20 تکمیل</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td className="text-center text-sm-start">145</td>
                        
                        <td>
                            <div className="badge bg-success bg-opacity-10 text-success">زنده</div>
                        </td>
                        
                        <td>350,000 تومان</td>
                        
                        <td>
                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit"></i></a>
                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                        </td>
                    </tr>

                    
                    <tr>
                        
                        <td>
                            <div className="d-flex align-items-center">
                                
                                <div className="w-60px">
                                    <img src="/images/courses/4by3/02.jpg" className="rounded" alt=""/>
                                </div>
                                <div className="mb-0 ms-2">
                                    
                                    <h6 className="fw-normal"><a href="#">دوره جامع آموزش Photoshop</a></h6>
                                    
                                    <div className="d-sm-flex">
                                        <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2"></i>58 ویدیو</p>
                                        <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2"></i>0 تکمیل</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td className="text-center text-sm-start">0</td>
                        
                        <td>
                            <div className="badge bg-info bg-opacity-10 text-info">عملی</div>
                        </td>
                        
                        <td>120,000 تومان</td>
                        
                        <td>
                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit"></i></a>
                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                        </td>
                    </tr>

                    
                    <tr>
                        
                        <td>
                            <div className="d-flex align-items-center">
                                
                                <div className="w-60px">
                                    <img src="/images/courses/4by3/04.jpg" className="rounded" alt=""/>
                                </div>
                                <div className="mb-0 ms-2">
                                    
                                    <h6 className="fw-normal"><a href="#">دوره جامع آموزش Invision</a></h6>
                                    
                                    <div className="d-sm-flex">
                                        <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2"></i>16 ویدیو</p>
                                        <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2"></i>0 تکمیل</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td className="text-center text-sm-start">0</td>
                        
                        <td>
                            <div className="badge bg-danger bg-opacity-10 text-danger">رد شده</div>
                        </td>
                        
                        <td>270,000 تومان</td>
                        
                        <td>
                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit"></i></a>
                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                        </td>
                    </tr>

                    
                    <tr>
                        
                        <td>
                            <div className="d-flex align-items-center">
                                
                                <div className="w-60px">
                                    <img src="/images/courses/4by3/03.jpg" className="rounded" alt=""/>
                                </div>
                                <div className="mb-0 ms-2">
                                    
                                    <h6 className="fw-normal"><a href="#">دوره جامع آموزش Figma</a></h6>
                                    
                                    <div className="d-sm-flex">
                                        <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2"></i>25 ویدیو</p>
                                        <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2"></i>0 تکمیل</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td className="text-center text-sm-start">0</td>
                        
                        <td>
                            <div className="badge bg-info bg-opacity-10 text-info">عملی</div>
                        </td>
                        
                        <td>75,000 تومان</td>
                        
                        <td>
                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit"></i></a>
                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                        </td>
                    </tr>

                    
                    <tr>
                        
                        <td>
                            <div className="d-flex align-items-center">
                                
                                <div className="w-60px">
                                    <img src="/images/courses/4by3/07.jpg" className="rounded" alt=""/>
                                </div>
                                <div className="mb-0 ms-2">
                                    
                                    <h6 className="fw-normal"><a href="#">دوره جامع آموزش React-Native</a></h6>
                                    
                                    <div className="d-sm-flex">
                                        <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2"></i>18 ویدیو</p>
                                        <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2"></i>10 تکمیل</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td className="text-center text-sm-start">186</td>
                        
                        <td>
                            <div className="badge bg-success bg-opacity-10 text-success">زنده</div>
                        </td>
                        
                        <td>150,000 تومان</td>
                        
                        <td>
                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit"></i></a>
                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                        </td>
                    </tr>

                    
                    <tr>
                        
                        <td>
                            <div className="d-flex align-items-center">
                                
                                <div className="w-60px">
                                    <img src="/images/courses/4by3/11.jpg" className="rounded" alt=""/>
                                </div>
                                <div className="mb-0 ms-2">
                                    
                                    <h6 className="fw-normal"><a href="#">دوره جامع آموزش HTML</a></h6>
                                    
                                    <div className="d-sm-flex">
                                        <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2"></i>42 ویدیو</p>
                                        <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2"></i>25 تکمیل</p>
                                    </div>		
                                </div>
                            </div>
                        </td>
                        
                        <td className="text-center text-sm-start">345</td>
                        
                        <td>
                            <div className="badge bg-success bg-opacity-10 text-success">زنده</div>
                        </td>
                        
                        <td>45,000 تومان</td>
                        
                        <td>
                            <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit"></i></a>
                            <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
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
    
</div>);
}

export default ProfileTeacherManageCourseT;