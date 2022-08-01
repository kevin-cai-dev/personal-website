interface Props {
    heading: string;
}

export const ProjectHeading = ({ heading }: Props) => {
    return (
        <div className="text-md flex justify-between font-header font-bold uppercase tracking-wide md:text-2xl">
            {heading}
        </div>
    );
};
