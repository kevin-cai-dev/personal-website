import { icons } from '@assets/icons';

export const LIGHT = 'light';
export const DARK = 'dark';

const { instagramIcon, linkedInIcon, githubIcon, emailIcon, resumeIcon } =
    icons;

export const landingIconInfo = [
    {
        icon: instagramIcon,
        name: 'instagram',
        link: 'https://www.instagram.com/kev.l.caii/',
    },
    {
        icon: linkedInIcon,
        name: 'linkedIn',
        link: 'https://www.linkedin.com/in/kevin-cai-39a167203/',
    },
    {
        icon: githubIcon,
        name: 'github',
        link: 'https://github.com/Kevin-Cai-dev',
    },
];

export const portfolioIconInfo = [
    {
        icon: linkedInIcon,
        name: 'linkedIn',
        link: 'https://www.linkedin.com/in/kevin-cai-39a167203/',
    },
    {
        icon: githubIcon,
        name: 'github',
        link: 'https://github.com/Kevin-Cai-dev',
    },
    {
        icon: emailIcon,
        name: 'email',
        link: 'mailto:kevin.cai1028@gmail.com',
    },
    {
        icon: resumeIcon,
        name: 'resume',
        link: '/hero-banner.svg',
        download: true,
    },
];

export const exploreLinksInfo = [
    {
        name: 'Portfolio',
        href: '/portfolio',
        imgPath: '/filler.jpg',
    },
    {
        name: 'Keyboards',
        href: '/keyboards',
        imgPath: '/filler.jpg',
    },
];

export const pageLinksInfo = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
    },
    {
        name: 'Keyboards',
        href: '/keyboards',
    },
];
