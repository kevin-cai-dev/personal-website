import {
    faLinkedin,
    faGithubSquare,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faEnvelopeOpen,
    faFile,
    faHouse,
    faCode,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// external link icons
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />;
const resumeIcon = <FontAwesomeIcon icon={faFile} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagramSquare} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const emailOpenIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />;

// navigation icons
const homeIcon = <FontAwesomeIcon icon={faHouse} />;
const portfolioIcon = <FontAwesomeIcon icon={faCode} />;
const keyboardIcon = <FontAwesomeIcon icon={faKeyboard} />;

export const icons = {
    linkedInIcon,
    githubIcon,
    resumeIcon,
    instagramIcon,
    emailIcon,
    emailOpenIcon,
    homeIcon,
    portfolioIcon,
    keyboardIcon,
};
