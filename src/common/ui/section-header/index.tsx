interface Props {
    header: string;
}

export const SectionHeader = ({ header }: Props) => {
    return (
        <h2 className="pb-6 font-header text-5xl font-bold uppercase italic md:pb-16">
            {header}
        </h2>
    );
};
