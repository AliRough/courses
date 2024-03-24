'use client'

const CourseFillterLavel = () => {
    return (<div className='card card-body shadow p-4 mb-4'>

        <h4 className='mb-3 fs-6'>فیلتر سطح مهارت</h4>
        <ul className='list-inline mb-0'>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-12' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-12'>همه سطح</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-9' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-9'>مبتدی</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-10' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-10'>مقدماتی</label>
            </li>

            <li className='list-inline-item mb-2'>
                <input type='checkbox' className='btn-check' id='btn-check-11' />
                <label className='btn btn-light btn-primary-soft-check' htmlFor='btn-check-11'>پیشرفته</label>
            </li>
        </ul>
    </div>);
}

export default CourseFillterLavel;