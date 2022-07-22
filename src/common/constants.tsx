import { ReactNode } from 'react';

import { icons } from '@assets/icons';

export const LIGHT = 'light';
export const DARK = 'dark';

const {
    instagramIcon,
    linkedInIcon,
    githubIcon,
    emailIcon,
    resumeIcon,
    homeIcon,
    portfolioIcon,
    keyboardIcon,
} = icons;

const linkedInInfo = {
    icon: linkedInIcon,
    name: 'linkedIn',
    link: 'https://www.linkedin.com/in/kevin-cai-39a167203/',
    tooltip: 'linkedin',
};
const instagramInfo = {
    icon: instagramIcon,
    name: 'instagram',
    link: 'https://www.instagram.com/kev.l.caii/',
    tooltip: 'instagram',
};
const githubInfo = {
    icon: githubIcon,
    name: 'github',
    link: 'https://github.com/Kevin-Cai-dev',
    tooltip: 'github',
};
const emailInfo = {
    icon: emailIcon,
    name: 'email',
    link: 'mailto:kevin.cai1028@gmail.com',
    tooltip: 'email',
};
const resumeInfo = {
    icon: resumeIcon,
    name: 'resume',
    link: '/hero-banner.svg',
    tooltip: 'resume',
    download: true,
};

export const landingIconInfo = [instagramInfo, linkedInInfo, githubInfo];
export const portfolioIconInfo = [
    linkedInInfo,
    githubInfo,
    emailInfo,
    resumeInfo,
];

export interface IconInfo {
    name: string;
    link: string;
    icon: ReactNode;
    tooltip: string;
    download?: boolean;
}

export const exploreLinksInfo = [
    {
        name: 'Portfolio',
        href: '/portfolio',
        imgPath: '/portfolio-nav.jpg',
    },
    {
        name: 'Keyboards',
        href: '/keyboards',
        imgPath: '/keyboard-nav.jpg',
    },
];

export const pageLinksInfo = [
    {
        name: 'Home',
        href: '/',
        icon: homeIcon,
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
        icon: portfolioIcon,
    },
    {
        name: 'Keyboards',
        href: '/keyboards',
        icon: keyboardIcon,
    },
];
