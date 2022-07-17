import Link from 'next/link';
import { ReactNode } from 'react';

import { pageLinksInfo } from '@common/constants';
import { NavigationHeader } from '@common/ui/navigation-header';
interface Props {
    children: ReactNode;
}

export const Drawer = ({ children }: Props) => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative">{children}</div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu w-10/12 overflow-y-auto bg-base-100 p-4 text-base-content first-letter:menu-compact sm:menu-normal sm:w-80">
                    <NavigationHeader header="Explore" />
                    <div className="divider" />
                    {pageLinksInfo.map((info) => {
                        return (
                            <li key={info.name} className="hover-bordered">
                                <Link href={info.href}>
                                    <div>
                                        {info.icon}
                                        {info.name}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
