interface Props {
    technologies: string[];
}

export const ProjectTech = ({ technologies }: Props) => {
    return (
        <div className="flex flex-wrap gap-2 pt-8">
            {technologies.map((techName, index) => {
                return (
                    <div
                        className="badge badge-outline"
                        key={`${techName} ${index}`}
                    >
                        {techName}
                    </div>
                );
            })}
        </div>
    );
};
