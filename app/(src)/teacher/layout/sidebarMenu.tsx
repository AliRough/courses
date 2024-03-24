'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TMenu = {
    name: string;
    link: string;
    icon: string;
}

const LayoutProfileSidebarMenuT = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    console.log('Not completed')

    const menu: TMenu[] = [
        { name: 'داشبورد', link: 'dashboard', icon: 'bi-ui-checks-grid' },
        { name: 'لیست دوره ها', link: 'manage-course', icon: 'bi-basket' },
        { name: 'امتحانات', link: 'quiz', icon: 'bi-question-diamond' },
        { name: 'آنالیز و تحلیل درآمدها', link: 'earning', icon: 'bi-graph-up' },
        { name: 'لیست دانشجویان', link: 'student-list', icon: 'bi-people' },
        { name: 'لیست سفارشات', link: 'order', icon: 'bi-folder-check' },
        { name: 'دیدگاه ها', link: 'review', icon: 'bi-star' },
        { name: 'ویرایش پروفایل', link: 'edit-profile', icon: 'bi-pencil-square' },
        { name: 'درآمدها', link: 'payout', icon: 'bi-wallet2' },
        { name: 'تنظیمات', link: 'setting', icon: 'bi-gear' },
        { name: 'حذف پروفایل', link: 'delete-account', icon: 'bi-trash' },
    ]

    const path = usePathname()

    return (<section className="pt-0">
        <div className="container">
            <div className="row">

                <div className="col-xl-3">

                    <div className="offcanvas-xl offcanvas-end" tabIndex="-1" id="offcanvasSidebar">

                        <div className="offcanvas-header bg-light">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">پروفایل</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body p-3 p-xl-0">
                            <div className="bg-dark border rounded-3 pb-0 p-3 w-100">

                                <div className="list-group list-group-dark list-group-borderless">

                                    {menu.map((e: TMenu) => <Link key={e.name} className={clsx("list-group-item", ("/profile/t/" + e.link === path) && 'active')} href={"/profile/t/" + e.link}>
                                        <i className={clsx(e.icon, "bi fa-fw me-2")}></i>{e.name}</Link>)}

                                    <Link className="list-group-item text-danger bg-danger-soft-hover" href="sign-in.html"><i className="fas fa-sign-out-alt fa-fw me-2"></i>خروج</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-xl-9">

                    {children}

                </div>
            </div>
        </div>
    </section>
    );
}

export default LayoutProfileSidebarMenuT;