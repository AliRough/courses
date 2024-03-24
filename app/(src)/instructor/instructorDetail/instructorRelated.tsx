'use client'

import { useInstructorRelated } from '@/app/(src)/hooks/request/requestInstructor';
import InstructorTile from '@/app/(src)/instructor/instructorTile';

import { TInstructorRelated } from '@/app/(src)/model/instructor.d';

const InstructorRelated = () => {

    const { data } = useInstructorRelated()

    return (<section>
        <div className='container'>

            <div className='row mb-4'>
                <h2 className='mb-0 fs-4'>مدرسین پیشنهادی</h2>
            </div>
            <div className='tiny-slider arrow-round arrow-creative arrow-blur arrow-hover'>
                <div className='tiny-slider-inner' data-autoplay='false' data-arrow='true' data-dots='false' data-items='4' data-items-lg='3' data-items-md='2' data-items-xs='1'>
                    {data?.map((e: TInstructorRelated) => <InstructorTile key={e?.id} data={e} />)}
                </div>
            </div>
        </div>
    </section>);
}

export default InstructorRelated;