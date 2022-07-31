import { icons } from '@assets/icons';

export const LIGHT = 'light';
export const DARK = 'dark';

const dev = process.env.NODE_ENV === 'development';

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

// external link icons config
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

// landing page icon links
export const landingIconInfo = [instagramInfo, linkedInInfo, githubInfo];

// portfolio page icon links
export const portfolioIconInfo = [
    linkedInInfo,
    githubInfo,
    emailInfo,
    resumeInfo,
];

// explore section links
export const exploreLinksInfo = [
    {
        name: 'Portfolio',
        href: '/portfolio',
        imgPath: '/portfolio-nav.jpg',
    },
    ...(dev
        ? [
              {
                  name: 'Keyboards',
                  href: '/keyboards',
                  imgPath: '/keyboard-nav.jpg',
              },
          ]
        : []),
];

// shared routing config
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
    ...(dev
        ? [
              {
                  name: 'Keyboards',
                  href: '/keyboards',
                  icon: keyboardIcon,
              },
          ]
        : []),
];
