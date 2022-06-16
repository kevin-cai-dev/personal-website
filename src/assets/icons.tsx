import {
    faLinkedin,
    faGithubSquare,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faEnvelopeOpen,
    faFile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />;
const resumeIcon = <FontAwesomeIcon icon={faFile} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagramSquare} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const emailOpenIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />;

export const icons = {
    linkedInIcon,
    githubIcon,
    resumeIcon,
    instagramIcon,
    emailIcon,
    emailOpenIcon,
};
