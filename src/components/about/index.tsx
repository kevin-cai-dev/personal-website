import ReactMarkdown from 'react-markdown';

interface Props {
    content: string;
}

const About = ({ content }: Props) => {
    return <ReactMarkdown className="prose">{content}</ReactMarkdown>;
};

export default About;
