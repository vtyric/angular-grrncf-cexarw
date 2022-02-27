import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product, ShippingPrice} from '../interafaces';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: Product[] = [];

    constructor(private http: HttpClient) {
    }

    public addToCart = (product: Product): void => {
        this.items.push(product);
    };

    public getItems = (): Product[] => this.items;

    public clearCart = (): Product[] => {
        this.items = [];
        return this.items;
    }

    public getShippingPrices = (): Observable<ShippingPrice[]> =>
        this.http.get<ShippingPrice[]>('/assets/shipping.json');
}
