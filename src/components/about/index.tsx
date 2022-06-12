import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import filler from '/public/filler.jpg';

import { SectionHeader } from '@common/ui';

interface Props {
    content: string;
}

const About = ({ content }: Props) => {
    return (
        <>
            <SectionHeader header="about me" />
            <div className="grid grid-cols-2 gap-8">
                <div className="w-full basis-1/2 justify-self-center pr-8">
                    <Image
                        src={filler}
                        alt=""
                        width={3752}
                        height={5757}
                        layout="responsive"
                        sizes="50vw"
                        placeholder="blur"
                    />
                </div>
                <ReactMarkdown className="prose">{content}</ReactMarkdown>
            </div>
        </>
    );
};

export default About;
