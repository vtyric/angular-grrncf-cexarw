import {Component, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: Product | undefined;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('productId'));
        this.product = products.find(p => p.id === id);
    }
}
