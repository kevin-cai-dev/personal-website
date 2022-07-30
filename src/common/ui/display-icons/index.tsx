import { IconInfo } from '@common/types';

interface Props {
    iconInfo: IconInfo[];
}

export const DisplayIcons = ({ iconInfo }: Props) => {
    return (
        <div className="flex space-x-4 text-3xl text-base-content md:space-x-6  md:text-5xl landscape:text-3xl landscape:lg:text-5xl">
            {iconInfo.map((info) => {
                return (
                    <a
                        href={info.link}
                        key={info.name}
                        className="tooltip tooltip-bottom transition-colors duration-100 hover:text-secondary"
                        data-tip={info.tooltip}
                        target="_blank"
                        rel="noreferrer"
                        download={info.download === true}
                    >
                        {info.icon}
                    </a>
                );
            })}
        </div>
    );
};
