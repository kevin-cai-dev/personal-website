import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const TitleSection = ({ children }: Props) => {
    return (
        <div
            className="h-full w-full bg-base-100 bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(/homepage-images/hero-banner.svg)`,
            }}
        >
            <div className="m-auto flex h-full max-w-screen-2xl items-center px-4 sm:px-8 lg:px-16">
                {children}
            </div>
        </div>
    );
};
