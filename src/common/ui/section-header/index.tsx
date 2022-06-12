interface Props {
    header: string;
}

export const SectionHeader = ({ header }: Props) => {
    return (
        <h2 className="pb-16 font-header text-5xl font-bold uppercase italic">
            {header}
        </h2>
    );
};
