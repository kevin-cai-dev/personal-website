import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const PageSection = ({ children }: Props) => {
    return (
        <div className="w-full bg-base-100 py-16">
            <div className="px-8">{children}</div>
        </div>
    );
};
