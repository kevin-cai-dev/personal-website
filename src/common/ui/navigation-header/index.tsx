interface Props {
    header: string;
}

export const NavigationHeader = ({ header }: Props) => {
    return (
        <h2 className="pt-6 font-header text-3xl font-bold uppercase italic tracking-wide xs:text-5xl">
            {header}
        </h2>
    );
};
