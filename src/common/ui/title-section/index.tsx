import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const TitleSection = ({ children }: Props) => {
    return (
        <div
            className="h-full w-full bg-base-100"
            style={{
                backgroundImage: `url(/hero-banner.svg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="m-auto h-full max-w-screen-2xl px-4 sm:px-8 lg:px-16">
                {children}
            </div>
        </div>
    );
};
