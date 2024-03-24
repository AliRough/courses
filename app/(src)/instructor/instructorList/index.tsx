'use client'

import CardBecomeInstructor from '@/app/(src)/componenets/other/cardBecomeInstructor';
import { useInstructorAll } from '@/app/(src)/hooks/request/requestInstructor';
import PaginationCenter from '@/app/(src)/componenets/pagination';
import HeaderBody from '@/app/(src)/componenets/headerBody';
import InstructorListFilter from '@/app/(src)/instructor/instructorList/instructorListFilter';
import InstructorListItem from '@/app/(src)/instructor/instructorList/instructorListItem';

import { TInstructorListItem } from '@/app/(src)/model/instructor.d';


const InstructorListAll = () => {

    const { data, isPending } = useInstructorAll()

    console.log('link جذب مدرس')
    console.log('Not completed')

    return (<>
        <HeaderBody name='لیست مدرس' />
        <section className='pt-4'>
            <div className='container'>
                <InstructorListFilter />
                <div className='row g-4 justify-content-center'>
                    {!isPending &&
                        data.map((e: TInstructorListItem) => <InstructorListItem key={e?.id} data={e} />)
                    }
                </div>
                {!isPending && <PaginationCenter />}
            </div>
        </section>
        <CardBecomeInstructor />
    </>);
}

export default InstructorListAll;


