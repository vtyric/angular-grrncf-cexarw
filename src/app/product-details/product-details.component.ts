import {Component, OnInit} from '@angular/core';
import {products} from "../products";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../services/cart.service";
import {Product} from '../interafaces';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: Product | undefined;

    constructor(private route: ActivatedRoute, private cartService: CartService) {
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('productId'));
        this.product = products.find(p => p.id === id);
    }

    public addToCart(product: Product): void {
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
    }
}
