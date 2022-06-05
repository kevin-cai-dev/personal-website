import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const TitleSection = ({ children }: Props) => {
    return (
        <div className="h-screen w-full bg-base-100">
            <div className="h-full px-8">{children}</div>
        </div>
    );
};

export default TitleSection;
