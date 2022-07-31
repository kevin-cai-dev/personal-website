import { ReactNode } from 'react';

export interface IconInfo {
    name: string;
    link: string;
    icon: ReactNode;
    tooltip: string;
    download?: boolean;
}

export interface ProjectPost {
    frontmatter: {
        position: number;
        title: string;
        github?: string;
        link?: string;
        imageurl: string;
        year: number;
        technologies: string[];
    };
    content: string;
}
