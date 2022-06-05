import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Drawer = ({ children }: Props) => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{children}</div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu w-10/12 overflow-y-auto bg-base-100 p-4 text-base-content sm:w-80">
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Drawer;
