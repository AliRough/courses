'use client'

const CourseListFillter = () => {
    return (    <div className='row mb-4 align-items-center'>

    <div className='col-xl-6'>
        <form className='border rounded p-2'>
            <div className='input-group input-borderless'>
                <input className='form-control me-1' type='search' placeholder='جستجو دوره ...' />
                <button type='button' className='btn btn-primary mb-0 rounded z-index-1'><i className='fas fa-search'></i></button>
            </div>
        </form>
    </div>


    <div className='col-xl-3 mt-3 mt-xl-0'>
        <form className='border rounded p-2 input-borderless'>
            <select className='form-select form-select-sm js-choice border-0' aria-label='.form-select-sm'>
                <option value=''>پربازدیدترین</option>
                <option>بروزترین</option>
                <option>پرفروش ترین</option>
                <option>جدیدترین</option>
            </select>
        </form>
    </div>


    <div className='col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0'>

        <button className='btn btn-primary mb-0 d-lg-none' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasSidebar' aria-controls='offcanvasSidebar'>
            <i className='fas fa-sliders-h me-1'></i> نمایش فیلتر
        </button>

        <p className='mb-0 text-end'>نمایش 1-7 از 32 نتیجه</p>
    </div>

</div> );
}

export default CourseListFillter;