import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const PageSection = ({ children }: Props) => {
    return (
        <div className="m-auto w-full  bg-base-100 py-16">
            <div className="max-w-screen-2xl px-4 sm:px-8 lg:px-16">
                {children}
            </div>
        </div>
    );
};
