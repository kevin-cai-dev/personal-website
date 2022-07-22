import { ReactNode } from 'react';

export interface IconInfo {
    name: string;
    link: string;
    icon: ReactNode;
    tooltip: string;
    download?: boolean;
}
