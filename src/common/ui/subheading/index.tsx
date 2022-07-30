interface Props {
    heading: string;
}

export const Subheading = ({ heading }: Props) => {
    return (
        <div className="text-md font-header font-bold uppercase tracking-wide md:text-2xl">
            {heading}
        </div>
    );
};
