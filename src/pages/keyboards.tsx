import type { NextPage } from 'next';

const Keyboards: NextPage = () => {
    return <>keyboards</>;
};

export default Keyboards;

export const getStaticProps = () => {
    return {
        ...(process.env.NODE_ENV === 'production' && {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }),
        props: {},
    };
};
