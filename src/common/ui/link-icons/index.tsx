import {
    faLinkedin,
    faGithubSquare,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faEnvelopeOpen,
    faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

export const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
export const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />;
export const resumeIcon = <FontAwesomeIcon icon={faFilePdf} />;
export const instagramIcon = <FontAwesomeIcon icon={faInstagramSquare} />;
export const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
export const emailOpenIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />;

interface DisplayIconsProps {
    iconInfo: {
        name: string;
        link: string;
        icon: ReactNode;
        download?: boolean;
    }[];
}

export const DisplayIcons = ({ iconInfo }: DisplayIconsProps) => {
    return (
        <div className="flex space-x-4 text-3xl text-base-content md:space-x-6  md:text-5xl landscape:text-3xl landscape:lg:text-5xl">
            {iconInfo.map((info) => {
                return (
                    <a
                        href={info.link}
                        key={info.name}
                        className="transition-colors duration-100 hover:text-accent"
                        target="_blank"
                        rel="noreferrer"
                        download={info.download === true}
                    >
                        {info.icon}
                    </a>
                );
            })}
        </div>
    );
};
