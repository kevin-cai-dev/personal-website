interface Props {
    heading: string;
    year: number;
}

export const ProjectHeading = ({ heading, year }: Props) => {
    return (
        <div className="text-md flex justify-between font-bold uppercase tracking-wide md:text-2xl">
            <span className="font-header">{heading}</span>
            <span className="font-code">{year}</span>
        </div>
    );
};
