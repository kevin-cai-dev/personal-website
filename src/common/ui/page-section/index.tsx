import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const PageSection = ({ children }: Props) => {
    return (
        <div className="m-auto w-full max-w-screen-2xl bg-base-100 p-4 sm:p-8 lg:p-16">
            {children}
        </div>
    );
};
