import { Guid } from 'guid-typescript';

export interface Product {
    id: Guid;
    categoryName: string;
    name: string;
    brand: string;
    model: string;
    price: number;
    amount: number;
    description: string;
    image: string;
}
