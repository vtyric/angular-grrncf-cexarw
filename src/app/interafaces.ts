export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface ShippingPrice {
    type: string;
    price: number;
}