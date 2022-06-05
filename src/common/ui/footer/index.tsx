import { messages } from './messages';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 p-10">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">{messages.home}</a>
                <a className="link link-hover">{messages.portfolio}</a>
                <a className="link link-hover">{messages.keyboards}</a>
            </div>
            <div>
                <p>{messages.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
