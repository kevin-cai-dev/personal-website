import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import filler from '/public/filler.jpg';

import { SectionHeader } from '@common/ui';

interface Props {
    content: string;
}

const About = ({ content }: Props) => {
    return (
        <>
            <SectionHeader header="about me" />
            <div className="grid gap-4 md:grid-cols-2">
                <div className="w-full max-w-[70vw] basis-1/2 justify-self-center md:pr-2 lg:pr-8">
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
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className="prose prose-sm max-w-none basis-1/2 justify-self-center xs:prose-base lg:prose-lg"
                >
                    {content}
                </ReactMarkdown>
            </div>
        </>
    );
};

export default About;
