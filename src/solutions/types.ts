export interface Solution {
    title: string;
    price: string | number;
    bold?: boolean;
}

export interface SolutionsProps {
    title?: string;
    solutions: Solution[];
}
