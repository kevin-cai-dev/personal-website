interface Props {
    heading: string;
}

export const ProjectHeading = ({ heading }: Props) => {
    return (
        <div className="text-md flex justify-between font-bold uppercase tracking-wide md:text-2xl">
            <span className="font-header">{heading}</span>
        </div>
    );
};
