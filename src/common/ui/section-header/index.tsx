interface Props {
    header: string;
}

export const SectionHeader = ({ header }: Props) => {
    return (
        <h2 className="pb-6 font-header text-3xl font-bold uppercase italic tracking-wide xs:text-5xl md:pb-16">
            {header}
        </h2>
    );
};
