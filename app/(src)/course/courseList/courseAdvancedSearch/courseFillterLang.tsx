'use client'

const CourseFillterLang = () => {
    return (<div className='card card-body shadow p-4 mb-4'>

        <h4 className='mb-3 fs-6'>فیلتر زبان</h4>
        <ul className='list-inline mb-0 g-3'>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-2' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-2'>انگلیسی</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-3' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-3'>فرانسه</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-4' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-4'>هند</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-5' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-5'>روسی</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-6' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-6'>اسپانیا</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-7' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-7'>ایتالیا</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-8' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-8'>آلمان</label>
            </li>
        </ul>
    </div>);
}

export default CourseFillterLang;