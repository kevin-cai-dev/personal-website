import { messages } from './messages';

interface Props {
    github: string | undefined;
    link: string | undefined;
}

export const ProjectLinks = ({ github, link }: Props) => {
    return (
        <div className="flex gap-2 py-4">
            {!github && !link && (
                <button className="btn btn-outline btn-accent" disabled>
                    {messages.private}
                </button>
            )}
            {github && (
                <a href={github} rel="noreferrer" target="_blank">
                    <button className="btn btn-outline btn-primary font-sans">
                        {messages.github}
                    </button>
                </a>
            )}
            {link && (
                <a href={link} rel="noreferrer" target="_blank">
                    <button className="btn btn-outline btn-secondary font-sans">
                        {messages.link}
                    </button>
                </a>
            )}
        </div>
    );
};
