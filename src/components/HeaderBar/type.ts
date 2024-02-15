import { ReactNode } from 'react';

export interface HeaderBarProps {
    title?: string;
    headerClass?: string;
    renderTitle?: () => ReactNode;
}
